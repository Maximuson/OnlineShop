import React from "react";
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';
import add from '../../imgs/add.svg'

const Header = () => {
  return (
    <div className={s.header}>
      <div>
        <NavLink to="/phones">
          <span>Телефони</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/bucket">
          <img  className = {s.buttonBuy} src={add} alt=""/>
          <span>Кошик</span>
          <span className={s.countPhones}>0</span>
        </NavLink></div>
    </div>
  );
};

export default Header;