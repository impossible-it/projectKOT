import React from 'react';
import '../components/card__style.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/react';
import Button from 'react-bootstrap/Button';
import ekvar from '../components/img/ekvar.png'
import safe from '../components/img/safe.png'


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
const CardPage = ({}) => {
  const navigate = useNavigate();
  const buttonTypeNavigate = () => { navigate('/card/fetch')}
  const buttonInfo = () => {
    window.open('https://www.pcisecuritystandards.org/document_library/', '_blank'); // Replace 
  }
    return (
        
        
        <div className="galileo-design" >
            <div className="depth-frame">
            <div className="depth-frame-wrapper" >
            <div className="div-wrapper">
            <div className="div bg-white">
            <LoadingOverlay />
            <div className="depth-frame-89 mt-2">      
                <img className="frame-3-photo"src={ekvar}></img>
            </div>
            <div className="depth-frame-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper">Эквайринг сервис</div>
                </div>
            </div>   
            <div className="depth-frame-7 mt-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper-5">Включает в себя важный этап в платежном процессе, где происходит</div>
                </div>
            </div>
            <div className="depth-frame-7">
                <div className="depth-frame-3">
                    <div className="text-wrapper-5">закрепление выбранного источника оплаты за счет.</div>
                </div>
            </div>
            <div className="depth-frame-7">
                <div className="depth-frame-3">
                    <div className="text-wrapper-5">Это обеспечивает безопасность и удобство в проведении транзакций.</div>
                </div>
            </div>
          
            <div className="depth-frame-89 mt-5">      
                <img className="frame-3-photo"src={safe}></img>
            </div>
            <div className="depth-frame-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper">Безопасность ваших данных</div>
                </div>
            </div>
          
            <div className="depth-frame-7 mt-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper-5">Хранение, обработка или передача информации о держателе</div>
                </div>
            </div>
            <div className="depth-frame-7">
                <div className="depth-frame-3">
                    <div className="text-wrapper-5">контролируется стандартами по безопасти данных индустрии.</div>
                </div>
            </div>
            <div className="depth-frame-7">
                <div className="depth-frame-3">
                    <div className="text-wrapper-5">Этот стандарт определяет 6 областей контроля и 12 основных требований </div>
                </div>
            </div>
            <div className="depth-frame-7">
                <div className="depth-frame-3">
                    <div className="text-wrapper-5"> по безопасности, и мы прилагаем все усилия для их соблюдения.</div>
                </div>
            </div>
            <div className="depth-frame-8">
                <div className="depth-frame-3">
                    <p className="text-wrapper-4">Нажмите кнопку "Информация" для детального</p> 
                    <p className="text-wrapper-4">изучения всех основных требований</p> 
                </div>
            </div>
            <div>
            
            </div>
            
            <div className="depth-frame-98">  
                    <Button onClick={buttonInfo}size="lg" className="w-30 m-2"variant="dark" as="input" value="Информация"></Button>{' '}
                    <Button onClick={buttonTypeNavigate}size="lg" className="w-30 m-2"variant="success" as="input" value="Приступить"></Button>{' '}
            </div>
            </div>
            </div>
            </div> 
            </div>
        </div>
                

    );
    
}

export default CardPage;
