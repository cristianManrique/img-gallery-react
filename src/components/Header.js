import React from 'react';
import logo from '../assets/img/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header fixed flex flex-space-between">
        <img className="logo"  alt="logo" src={logo}/>
        <ul className="nav-flex mr20">
          <li><a href="/">Home</a></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </header>
    )
  }
}

export default Header;
