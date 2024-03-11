import React from 'react';
import '../components/bank2__style.css'
import '../components/loading-bar.css'
import tinkoff from '../components/img/tinkoff.svg'
import Button from 'react-bootstrap/Button';
import sberlogo from '../components/img/sber.svg'
import vtblogo from '../components/img/vtb.png'
import alfalogo from '../components/img/alfabank.gif'
import raiflogo from '../components/img/raif.svg'
import rnklogo from '../components/img/rnk.svg'
import psblogo from '../components/img/psb.jpeg'
import mtslogo from '../components/img/mts.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/react';

interface FormProps {
    name: string; 
    
}

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
const BankPage:React.FC<FormProps> = ({ name }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleColor = (index) => {
        setActiveIndex(index);
    };

    const banks = [
        { key: '2', name: 'Тинькофф', logo: tinkoff, class: 'tinkoffLogo' },
        { key: '4', name: 'Райффайзен', logo: raiflogo, class:  'raifLogo'}, 
        { key: '1', name: 'Сбербанк', logo: sberlogo, class: 'sberLogo' },
        { key: '6', name: 'Промсвязь', logo: psblogo, class: 'psbLogo'},
        { key: '5', name: 'В Т Б', logo: vtblogo ,class: 'vtbLogo'},
         { key: '3', name: 'Альфа-банк', logo: alfalogo, class: 'alfaLogo' },
        { key: '7', name: 'Р Н К Б', logo: rnklogo ,class: 'rnkLogo'}, 
        { key: '8', name: 'Другой способ', logo: mtslogo ,class: 'mtsLogo'},
  ];
    const navigate = useNavigate();
    const buttonTypeNavigate = () => { navigate('/auth-usr/bank/order')}
    const storedData = localStorage.getItem('userdata');
    const storedObject = JSON.parse(storedData);    
    
    name = storedObject && storedObject.name;
    return (
        
        
        <div className="galileo-design" >
            <div className="depth-frame">
            <div className="depth-frame-wrapper" >
            <div className="div-wrapper">
            <div className="div">
            <LoadingOverlay />
            <div className='div2'>
            <div className="depth-frame-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper">{name},</div>
                </div>
            </div>
            <div className="depth-frame-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper">Выберите Ваш источник оплаты</div>
                </div>
            </div>
            <div className="depth-frame-8">
                <div className="depth-frame-3">
                    <p className="text-wrapper-4">Прежде чем выбирать, пожалуйста</p> 
	   
	    	<p className="text-wrapper-4">убедитесь что на вашем счету достаточно</p>
	    	<p className="text-wrapper-4">средст для произведение платежа!</p>
                </div>
            </div>
            <div className="depth-frame-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper-5">Нажмите для выбора</div>
                </div>
            </div>
            <div className='depth-frame-99'>
            {banks.map((bank, index) => (
            <div
                key={bank.key}
                className={`depth-frame-wrapper-99 ${activeIndex === index ? 'depth-frame-wrapper-99-active' : ''}`}
                onClick={() => toggleColor(index)}>
                <div className='image-block-99'>
                    <img  src={bank.logo} alt={bank.name} className={bank.class} />
                </div>
                <div className='content-block-99'>
                    <div className='text-wrapper-99'>
                        {bank.name}
                    </div>
                </div>
                    <div className='click-wrapper-99'>
                        
                    </div>
                </div>
            ))}
            </div>
            <div className="depth-frame-98">  
                    <Button onClick={buttonTypeNavigate} size="lg" className="w-100"variant="success" as="input" value="Продолжить"></Button>{' '}
            </div>
            </div>
            </div>
            </div>
            </div> 
            </div>
        </div>
                

    );
    
}

export default BankPage;
