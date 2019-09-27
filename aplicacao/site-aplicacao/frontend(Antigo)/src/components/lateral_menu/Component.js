import React,{useState} from 'react';
import logo from '../../assets/logo_white.png';
import './Component.css';

export default function Component() {
  const [color, setColor] = React.useState('#000');

  function changeColors(element) {
    const className = (element.target.className);
    const colorVariable = 
    // switch (className) {
    //   case 'Menu-perfil':
    //     return colorVariable = '--menu';    
    //     break;
    
    //   default:
    //     break;
    // }
    console.log(colorVariable);
    document.documentElement.style.setProperty(colorVariable, color);
  }

  return (
    <div className="Lateral-menu">
      <img src={logo} className="Menu-logo" alt="perfil" />
      <span className="Menu-perfil">Eduardo Menezes</span>
      <span className="Menu-button Selected">Home</span>
      <span className="Menu-button" onClick={changeColors}>Squads</span>
      <span className="Menu-button">Dashboards</span>
      <span className="Menu-button Logout">Logout</span>
    </div>
  );
}