import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MenuLateral from './components/lateral_menu/Component';
import Home from './pages/home/Page';
import './App.css';

function App() {
  return (
    <div className="app">
      <MenuLateral/>
      <div className="app-panel">
        <BrowserRouter>
			    <Route path='/' exact component={Home}/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
