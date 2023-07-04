import React from "react";
import style from '../NavBar/NavBar.module.css';

const NavBar = ({ brand }) => {
    
    return (
        <nav className="navbar navbar-dark bg-dark">
      <div className={style.NavBar}>
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
      </div>
    </nav> 
    );
  }

export default NavBar;
