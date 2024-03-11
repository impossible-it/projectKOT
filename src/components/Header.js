// src/components/Header.js
import React from 'react';
import { useState } from 'react';
import '../components/header__style.css'
import logo from '../components/img/logo.svg'
import exit from '../components/img/exit.svg'
import { useNavigate } from 'react-router-dom'




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
    window.location.href = '/auth-usr';
  }
  const navigate = useNavigate();
  const logoNavigateHome = () => { navigate('/auth-usr')}

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-4 px-lg-5">
                <img onClick={logoNavigateHome} src={logo}></img>
                <a class="navbar-brand" href="#!">PAYLINK</a>
                <button class="navbar-toggler collapsed" onClick={toggleMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link" aria-current="page" href="/auth-usr">Главная</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Информация</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Сервис</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/cash">Обнал-сервис</a></li>
                                {/* <li><hr class="dropdown-divider" /></li> */}
                                <li><a class="dropdown-item" href="/mirpay">Экваринг сервис</a></li>
                                <li><a class="dropdown-item" href="/card">Visa/MasterCard</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-light" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Торговать
      
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    
  );
};

export default Header;
