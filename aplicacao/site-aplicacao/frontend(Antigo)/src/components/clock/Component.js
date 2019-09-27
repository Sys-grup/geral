import React from 'react';
import './Component.css';

export default function Component() {
  return (
    <div className="Clock-box">
      {/* <span className="Clock-hour">{(new Date()).toString()}</span> */}
      <span className="Clock-hour">19</span>
      <span className="Clock-colon">:</span>
      <span className="Clock-minute">29</span>
    </div>
  );
}