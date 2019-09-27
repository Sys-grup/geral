import React from 'react';
import './Page.css';
import Notification from '../../components/notification/Component';
import Squad from '../../components/squad_home/Component';
import Clock from '../../components/clock/Component';

function Page() {
  return (
    <div className="home">
      <Notification/>
      <Squad/>
      <Clock/>
    </div>
  );
}

export default Page;
