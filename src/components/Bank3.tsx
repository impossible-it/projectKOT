import React from 'react';
import '../components/bank2__style.css'
import '../components/loading-bar.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/react';
import sepa from '../components/img/sepa.svg'
import kraken from '../components/img/kraken.png'
import tron from '../components/img/tron.png'
import eth from '../components/img/eth.png'
import bnb from '../components/img/bnb.png'
import bitcoin from '../components/img/bitcoin.png'

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
        { key: '2', name: 'SEPA Transfer', logo: sepa, class: 'tinkoffLogo' },
        { key: '3', name: 'Kraken', logo: kraken , class: 'sberLogo' },
        { key: '1', name: 'USDT Tron', logo: tron , class: 'sberLogo' },
        { key: '1', name: 'USDT Ethereum', logo: eth , class: 'sberLogo' },
        { key: '1', name: 'BNB SmartChain', logo: bnb , class: 'sberLogo' },
        { key: '1', name: 'Bitcoin', logo: bitcoin , class: 'sberLogo' },

        

  ];
    const navigate = useNavigate();
    const buttonTypeNavigate = () => { navigate('/deutch/bank/order')}
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
                    <div className="text-wrapper">Select your payment source</div>
                </div>
            </div>
            <div className="depth-frame-8">
                <div className="depth-frame-3">
                    <p className="text-wrapper-4">Before you choose please</p> 
	   
	    	<p className="text-wrapper-4">make sure you have enough in your account</p>
	    	<p className="text-wrapper-4">funds for payment!</p>
                </div>
            </div>
            <div className="depth-frame-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper-5">Click to choose</div>
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
                    <Button onClick={buttonTypeNavigate} size="lg" className="w-100"variant="success" as="input" value="Continue"></Button>{' '}
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
