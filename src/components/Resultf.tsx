import React from 'react';
import '../components/card__style.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/react';
import Button from 'react-bootstrap/Button';
import success from '../components/img/success.png'

const LoadingOverlay = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => {
        // Очистка таймера при размонтировании компонента
        clearTimeout(timeoutId);
      };
    }, []);
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: #198754;`;
    if (!loading) {
      return null; // Если загрузка завершена, компонент вернет null
    }
  
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
        <RingLoader
            color="#198754"
            loading
            size={150}
            />
      </div>
    );
  };
  const ResultfPage = ({}) => {
    const navigate = useNavigate();
    const buttonTypeNavigate = () => {
      navigate('/card/fetch');
    };
 
    // Используйте хук useForm и объявите переменные form и setSubmittedValues внутри компонента FetchPage
    
        return (
        
        
            <div className="galileo-design" >
            <div className="depth-frame">
                <div className="depth-frame-wrapper" >
                    <div className="div-wrapper">
                        <div className="div bg-white">
                        <LoadingOverlay />
                    <div className='p-2 w-100'>
                        <div className='w-100'>
                            <ul className="nav nav-tabs mb-3 px-md-4 px-2">
                                <li className="nav-item"> <a className="nav-link px-2 active" aria-current="page" href="#">Банковская карта</a> </li> 
                                <li className="nav-item"> <a className="nav-link px-2" href="#">PayPal</a> </li>
                                <li className="nav-item"> <a className="nav-link px-2" href="#">YooMoney</a> </li>
                                <li className="nav-item ms-auto"> <a className="nav-link px-2" href="#">+ </a> </li>
                            </ul>
                            <div className="depth-frame-87 mt-2">      
                                <img className="frame-photo-6" src={success}></img>
                            </div>
                            <div className="depth-frame-2">
                                <div className="depth-frame-3">
                                    <div className="text-wrapper mb-4">Успешно закреплено!</div>
                                </div>
                                <div className="depth-frame-3">
                                    <div className="text-wrapper mb-4">Приступайте к торговле!</div>
                                </div>
                            </div>
                            </div>
                            <div className='frame-form-advance'>     
                            <form className="frame-form-options"action="">
                                <div className="depth-frame-98 mt-3 w-100 d-flex justify-content-center align-item-center">  
                                    <div className='w-100 d-flex justify-content-center align-item-center'>  
                                       <Button type="submit" size="lg" className="w-75"variant="dark" as="input" value="Вернуться на платформу"></Button>{' '}
                                    </div>
                                </div>
                            </form> 
                            </div>
                        </div>      
                    </div>           
                </div>
            </div>
        </div> 
    </div>
    );
}


export default ResultfPage;
