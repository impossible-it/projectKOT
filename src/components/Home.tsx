// src/components/HomePage.js
import './home__style.css'
import React from 'react';
import { useNavigate } from 'react-router-dom'


interface FormProps {
  data_first: string;
  data_second: string; 
  data_third: string; 
  data_fourth: string; 
  photo_first: string;
  photo_second: string; 
  photo_third: string; 
  photo_fourth: string; 
  link: boolean;
  text_style: object;
  text_start: string;
}




const Home: React.FC<FormProps> = 
({ text_start, text_style, link, data_first, data_second, data_third, data_fourth, photo_first, photo_second, photo_third, photo_fourth }) => { 
  const navigate = useNavigate();
  
  
  const handleButtonClickSber = () => {
    if (link) {
      navigate('/payment-sberbank');
    } else {
      navigate('/payment/bank/order');
    }
  } 

  const handleButtonClickTin = () => {
    if (link) {
      navigate('/payment-tinkoff');
    } else {
      navigate('/payment/bank/order');
    }
  } 

  const handleButtonClickGaz = () => {
    if (link) {
      navigate('/payment-gazprom');
    } else {
      navigate('/payment/bank/order');
    }
  } 

  const handleButtonClickFlk = () => {
    
    if (link) {
      navigate('/payment-flk');
    } else {
      navigate('/payment/bank/order');
      
    }
  }
   
  
  return (
    <> 
        <div className='main'>   
          <h1>{text_start}</h1>

          <div className="mainpage">
            <div className="main_company">
              <div className="main_company_content">
                <img src={photo_first}
                  alt="Сбербанк"/>
                <h2 style={text_style}>{data_first}</h2>
              </div>
              <div className="main_company_button">
                <button onClick={handleButtonClickSber}>Выбрать</button>
              </div>
              <div className="circle-container_first"></div>
            </div>
            <div className="main_company">
              <div className="main_company_content">
                  <img src={photo_second} 
                  alt="Тинькофф"/>
                <h2 style={text_style}>{data_second}</h2>
              </div>
              <div className="main_company_button">
                <button onClick={handleButtonClickTin}>Выбрать</button>
              </div>
              <div className="circle-container_second"></div>
            </div>
            <div className="main_company">
              <div className="main_company_content">
                  <img src={photo_third} 
                  alt="Газпром"/>
                <h2 style={text_style}>{data_third}</h2>
              </div>
              <div className="main_company_button">
                <button onClick={handleButtonClickGaz}>Выбрать</button>
              </div>
              <div className="circle-container_third"></div>
            </div>
            <div className="main_company">
              <div className="main_company_content">
                <img src={photo_fourth} 
                alt="ФЛК"/>
                
                <h2 style={text_style}>{data_fourth}</h2>
              </div>
              <div className="main_company_button">
                <button onClick={handleButtonClickFlk}>Выбрать</button>
              </div>
              <div className="circle-container_fourth"></div>
            </div>
          </div>
        </div>
  </>
  );
}

export default Home;
