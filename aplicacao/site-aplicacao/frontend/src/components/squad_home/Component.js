import React from 'react';
import './Component.css';

export default function Component() {
  return (
    <div className="squad-box">
      <span className="title">Squads</span>
      <div className="list">
        <div className="squad">
          <i className="status status-green"></i>
          <span className="name">Alpha</span>
          <div className="employers employers-online">
            <i>□</i>
            <span>5</span>
          </div>
          <div className="employers employers-offline">
            <i>□</i>
            <span>1</span>
          </div>
        </div>
        <div className="squad">
          <i className="status status-orange"></i>
          <span className="name">Beta</span>
          <div className="employers employers-online">
            <i>□</i>
            <span>4</span>
          </div>
          <div className="employers employers-offline">
            <i>□</i>
            <span>3</span>
          </div>
        </div>
        <div className="squad">
          <i className="status status-red"></i>
          <span className="name">Charlie</span>
          <div className="employers employers-online">
            <i>□</i>
            <span>2</span>
          </div>
          <div className="employers employers-offline">
            <i>□</i>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
