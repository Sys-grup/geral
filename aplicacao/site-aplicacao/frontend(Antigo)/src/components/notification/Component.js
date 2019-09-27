import React from 'react';
import './Component.css';

export default function Component() {
  return (
    <div className="notification-box">
      <span className="notification-title">Notifications</span>
      <div className="notification-list">
        <div className="notification green-notification">
          <span className="menssage">Alpha squad has finished the task.</span>
          <span className="time">31/12/1999 24:60</span>
        </div>
        <div className="notification orange-notification">
          <span className="menssage">Beta squad task is close to delivery date.</span>
          <span className="time">31/12/1999 24:60</span>
        </div>
        <div className="notification red-notification">
          <span className="menssage">Charlie squad task end date is near.</span>
          <span className="time">31/12/1999 24:60</span>
        </div>
      </div>
    </div>
  );
}
