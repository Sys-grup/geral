L.MapboxGL = L.Layer.extend({
    options: {
        updateInterval: 32
    },
    initialize: function (options) {
        L.setOptions(this, options);
        if (options.accessToken) {
            mapboxgl.accessToken = options.accessToken;
        } else {
            throw new Error('You should provide a Mapbox GL access token as a token option.');
        }
        var throttle = function (fn, time, context) {
            var lock, args, wrapperFn, later;
            later = function () {
                lock = false;
                if (args) {
                    wrapperFn.apply(context, args);
                    args = false;
                }
            };
            wrapperFn = function () {
                if (lock) {
                    args = arguments;
                } else {
                    fn.apply(context, arguments);
                    setTimeout(later, time);
                    lock = true;
                }
            };
            return wrapperFn;
        };
        this._throttledUpdate = throttle(L.Util.bind(this._update, this), this.options.updateInterval);
    },
    onAdd: function (map) {
        if (!this._glContainer) {
            this._initContainer();
        }
        map._panes.tilePane.appendChild(this._glContainer);
        this._initGL();
        this._offset = this._map.containerPointToLayerPoint([0, 0]);
        if (map.options.zoomAnimation) {
            L.DomEvent.on(map._proxy, L.DomUtil.TRANSITION_END, this._transitionEnd, this);
        }
    },
    onRemove: function (map) {
        if (this._map.options.zoomAnimation) {
            L.DomEvent.off(this._map._proxy, L.DomUtil.TRANSITION_END, this._transitionEnd, this);
        }
        map.getPanes().tilePane.removeChild(this._glContainer);
        this._glMap.remove();
        this._glMap = null;
    },
    getEvents: function () {
        return {
            move: this._throttledUpdate,
            zoomanim: this._animateZoom,
            zoom: this._pinchZoom,
            zoomstart: this._zoomStart,
            zoomend: this._zoomEnd
        };
    },
    _initContainer: function () {
        var container = this._glContainer = L.DomUtil.create('div', 'leaflet-gl-layer');
        var size = this._map.getSize();
        container.style.width = size.x + 'px';
        container.style.height = size.y + 'px';
    },
    _initGL: function () {
        var center = this._map.getCenter();
        var options = L.extend({}, this.options, {
            container: this._glContainer,
            interactive: false,
            center: [center.lng, center.lat],
            zoom: this._map.getZoom() - 1,
            attributionControl: false
        });
        this._glMap = new mapboxgl.Map(options);
        this._glMap.transform.latRange = null;
        L.DomUtil.addClass(this._glMap._canvas, 'leaflet-image-layer');
        L.DomUtil.addClass(this._glMap._canvas, 'leaflet-zoom-animated');
    },
    _update: function (e) {
        this._offset = this._map.containerPointToLayerPoint([0, 0]);
        if (this._zooming) {
            return;
        }
        var size = this._map.getSize(),
            container = this._glContainer,
            gl = this._glMap,
            topLeft = this._map.containerPointToLayerPoint([0, 0]);
        L.DomUtil.setPosition(container, topLeft);
        var center = this._map.getCenter();
        var tr = gl.transform;
        tr.center = mapboxgl.LngLat.convert([center.lng, center.lat]);
        tr.zoom = this._map.getZoom() - 1;
        if (gl.transform.width !== size.x || gl.transform.height !== size.y) {
            container.style.width = size.x + 'px';
            container.style.height = size.y + 'px';
            if (gl._resize !== null && gl._resize !== undefined) {
                gl._resize();
            } else {
                gl.resize();
            }
        } else {
            gl._update();
        }
    },
    _pinchZoom: function (e) {
        this._glMap.jumpTo({
            zoom: this._map.getZoom() - 1,
            center: this._map.getCenter()
        });
    },
    _animateZoom: function (e) {
        var scale = this._map.getZoomScale(e.zoom),
            offset = this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center);
        L.DomUtil.setTransform(this._glMap._canvas, offset.subtract(this._offset), scale);
    },
    _zoomStart: function (e) {
        this._zooming = true;
    },
    _zoomEnd: function () {
        var scale = this._map.getZoomScale(this._map.getZoom()),
            offset = this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), this._map.getZoom(), this._map.getCenter());
        L.DomUtil.setTransform(this._glMap._canvas, offset.subtract(this._offset), scale);
        this._zooming = false;
    },
    _transitionEnd: function (e) {
        L.Util.requestAnimFrame(function () {
            var zoom = this._map.getZoom(),
                center = this._map.getCenter(),
                offset = this._map.latLngToContainerPoint(this._map.getBounds().getNorthWest());
            L.DomUtil.setTransform(this._glMap._canvas, offset, 1);
            this._glMap.once('moveend', L.Util.bind(function () {
                this._zoomEnd();
            }, this));
            this._glMap.jumpTo({
                center: center,
                zoom: zoom - 1
            });
        }, this);
    }
});
L.mapboxGL = function (options) {
    return new L.MapboxGL(options);
};