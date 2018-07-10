import React from 'react';
import logo from '../assets/img/logo.svg';

class Header extends React.Component {
  render() {
  return (
    <header className="header fixed flex flex-space-between">
      <div className="logo-wrapper">
        <img className="logo" alt="logo" src={logo}/>
        <h4 className="titre">My-Logo</h4>
      </div>
      <ul className="nav-flex mr20">
        <li><a href="/">Accueil</a></li>
        <li><a href="/gallery">Gallerie</a></li>
      </ul>
    </header>
    )
  };
};

export default Header;
