import React from 'react';
import logo from '../../assets/logo_white.png';
import './Component.css';

export default function Component() {
  return (
    <div className="Lateral-menu">
      <img src={logo} className="Menu-logo" alt="perfil" />
      <span className="Menu-perfil">Eduardo Menezes</span>
      <span className="Menu-button">Home</span>
      <span className="Menu-button">Squads</span>
      <span className="Menu-button">Dashboards</span>
      <span className="Menu-logout">Logout</span>
    </div>
  );
}