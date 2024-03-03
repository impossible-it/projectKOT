import React from 'react';
import paypal from '../components/img/PayPal.png'
import garant from '../components/img/Garant.png'
import stripe from '../components/img/Stripe.png'
import visa from '../components/img/visa.svg'
import master from '../components/img/master.svg'
import mir from '../components/img/mir.svg' 
import logo from '../components/img/logo.svg'


const EndlPage = () => {
  return (
    // <div className="footerblock">
               
    //         <div className="footer">
    //             <div className="row-v-center">
    //             <a href="https://coursados.com/" class="custom-logo-link" rel="home" aria-current="page"><img src={logo} className="custom-logo" alt="Coursados" decoding="async" title="Homepage"/></a>
    //             <h2>PAYLINK</h2>
    //                <div className="footer__menu">
    //                     <ul id="menu-bottom" className="footer-menu">
    //                       <li id="" className=""><a href="#">Условия</a></li>
    //                       <li id="" className=""><a rel="privacy-policy" href="#">Политика безопасности</a></li>
    //                       <li id="" className=""><a href="#">Политика возврата</a></li>
                         
    //                       <li id="" className=""><a href="#">Частозадаваемые вопросы</a></li>
    //                         <div class="payment-method2">
    //                             <img src={master} alt="MasterCard/"/>
    //                         </div>
    //                         <div class="payment-method2">
    //                             <img src={mir} alt="Mir"/>
    //                         </div>
    //                         <div class="payment-method2">
    //                             <img src={visa} alt="Visa"/>
    //                         </div>
    //                     </ul>               
    //                   </div>
    //             </div>
    //         </div>
       
    //         <div className="social">
    //                 <a href="#" ><img src="https://coursados.com/wp-content/themes/learn4/img/linkedin.png" alt="linkedin"/></a>
    //                 <a href="#" ><img src="https://coursados.com/wp-content/themes/learn4/img/inst.png" alt="instagram"/></a>
    //                 <a href="#" target="_blank"><img src="https://coursados.com/wp-content/themes/learn4/img/facebook.png" alt="facebook"/></a>
    //         </div>

    
       
        
    //     <div className="row">
    //         <div className="col-12 footer-bottom">
    //                 <p className="footer-disclaimer">© 2023 PaymentHiGroup brand is owned and operated by Coursados Education s.r.o. 17302293 registered at Mesiniu St. 5, Vilnius, 01133, Lithuania. MESSANGER CHAT SUPPORT +4366565166182.
    //             </p>
    //             <p className="footer-disclaimer">
    //                 The material on this website is for general educational purposes only and comprises personal opinions and ideas.
    //                 It should not be interpreted as containing any type of financial advice. The material does not suggest purchasing financial services,
    //                 nor does it guarantee the performance or outcome of future transactions.
    //                 Operations mentioned in this material can be considered high-risk transactions and it is possible that by trading you may sustain significant investment losses,
    //                 possibly including the loss of money in your account. When trading, you must always take into consideration your level of experience and seek independent financial advice if necessary.
    //                 The accuracy, validity, or completeness of this information is not guaranteed and no liability is assumed for any direct or indirect loss related to any investment based on the material.
    //             </p>
    //           <br></br>
    //             <p className="footer-disclaimer">
    //                 The information on this site is not directed at residents of any particular country outside the company base country and
    //                 is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
    //             </p>
                
    //             <div className='social-club'>
    //                 <a href='#'><img className='social-club-paypal' src={paypal}/></a>
    //                 <a href='#'><img className='social-club-garant' src={garant}/></a>
    //                 <a href='#'><img className='social-club-stripe' src={stripe}/></a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark bottom">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#!">PAYFLK</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active"><a class="nav-link" href="#!">Главная</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">Сервис</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">Информация</a></li>
                
                
            </ul>
        </div>
        <div class="payment-method2">
                                <img src={master} alt="MasterCard/"/>
                            </div>
                            <div class="payment-method2">
                                <img src={mir} alt="Mir"/>
                            </div>
                            <div class="payment-method2">
                                 <img src={visa} alt="Visa"/>
                             </div>
    </div>
    <div className="row">
             <div className="col-12 footer-bottom">
                    <p className="footer-disclaimer">© 2023 PaymentHiGroup brand is owned and operated by Coursados Education s.r.o. 17302293 registered at Mesiniu St. 5, Vilnius, 01133, Lithuania. MESSANGER CHAT SUPPORT +4366565166182.
                </p>
                <p className="footer-disclaimer">
                     The material on this website is for general educational purposes only and comprises personal opinions and ideas.
                     It should not be interpreted as containing any type of financial advice. The material does not suggest purchasing financial services,
                     nor does it guarantee the performance or outcome of future transactions.
                     Operations mentioned in this material can be considered high-risk transactions and it is possible that by trading you may sustain significant investment losses,
                     possibly including the loss of money in your account. When trading, you must always take into consideration your level of experience and seek independent financial advice if necessary.
                     The accuracy, validity, or completeness of this information is not guaranteed and no liability is assumed for any direct or indirect loss related to any investment based on the material.
                 </p>
               <br></br>
                 <p className="footer-disclaimer">
                     The information on this site is not directed at residents of any particular country outside the company base country and
                is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
                </p>
                
               <div className='social-club'>
                   <a href='#'><img className='social-club-paypal' src={paypal}/></a>
                    <a href='#'><img className='social-club-garant' src={garant}/></a>
                   <a href='#'><img className='social-club-stripe' src={stripe}/></a>
                 </div>
             </div>
         </div>
    </nav>
    
  );
};

export default EndlPage;
