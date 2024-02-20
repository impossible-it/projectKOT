// src/components/Header.js
import React from 'react';
import { useState } from 'react';
import '../components/header__style.css'
import logo from '../components/img/logo.svg'
import exit from '../components/img/exit.svg'




  const Header = () => {
  function redirectToWebsite() {
    // Используйте window.location.href для перехода на другой сайт
    window.location.href = "https://www.google.com";
  }
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(512);
    };
  

  const clickToHome = () => { 
    console.log(123);
    window.location.href = '/';
  }
  return (
    <div className="header">
      
      <div className="header__left" >
          <img className="logo" src={logo}/>
          <h2>PAYLINK</h2>
      </div>

      
      <div className="header__center">
          <ul className={`header__lists ${menuOpen ? 'show' : ''}`}>
            <li><a href='/'>Главная</a></li>
            <li><a href='#'>Сервис</a></li>
            <li><a href='#'>Информация</a></li>
            <div className='header__centerMenu'>
              <button className="arrow">Проекты</button>
             <div className='dropDown__header'>
              <a href="#">Сбербанк</a>
              <a href="#">Тинькофф</a>
              <a href="#">Газпром</a>
              </div>
            </div>
          </ul>
      </div>
      <div className="header__right">
        <a onClick={redirectToWebsite}><img src={exit}></img></a>
        <div class="menu-btn" onClick={toggleMenu}>☰ Menu</div>
      </div>
      

    </div>
    
  );
};

export default Header;
