import React from 'react';
import logo from '../images/logo.png';

export default function Header(props) {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="updox" />
      <h1 className="title">Provider Directory</h1>
      <button className="btn" onClick={props.toggle}>
        Add Provider
      </button>
    </div>
  );
}
