import React from 'react';
import '../components/order2__style.css'
import Button from 'react-bootstrap/Button';
import { LuCopyPlus } from "react-icons/lu";
import { useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom'



const LoadingOverlay = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 2000);
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
  const AlertCopy = ({ message}) => {
    return (
        <div className="p-3 mb-3 text-dark">{message}</div>
    );
    }


  



  interface FormProps {
    name: string; 
    sum: number;
    order: number;
    order_sum: number;
    photo: string;
    card: number;
    client_number: 284278;
  }
const HomePage:React.FC<FormProps> = ({ client_number, name, sum, order_sum , photo, card, order }) => {
  const storedData = localStorage.getItem('userdata');
  const storedObject = JSON.parse(storedData);    

  sum = storedObject.summ
  name = storedObject && storedObject.name;

  const sumStorage = localStorage.getItem('Amount');
  order_sum = sumStorage  && JSON.parse(sumStorage)
  const cardStorage = localStorage.getItem('Card');
  card = cardStorage && JSON.parse(cardStorage);
  const tradeStorage = localStorage.getItem('Trade');
  order = tradeStorage && JSON.parse(tradeStorage);
  

  const [showCard, setShowCard] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showCount, setShowCount] = useState(false);
  const navigate = useNavigate();

  const buttonStatusNavigate = () => { navigate('/auth-usr/bank/order/status')}

  const handleButtonCard = () => {
    const cardStorage = localStorage.getItem('Card'); // Переменная которую передаешь для копирования name
    const card = cardStorage && JSON.parse(cardStorage);
    var orderNumber = card;
    var textToCopy = orderNumber.toString(); // Преобразуйте число в строку
    var tempTextarea = document.createElement('textarea'); // Создайте временный элемент textarea для хранения текста
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);// Добавьте временный элемент textarea в документ
    tempTextarea.select();// Выделите текст в элементе textarea
    tempTextarea.setSelectionRange(0, 99999); // Для поддержки мобильных устройств
    document.execCommand('copy');// Скопируйте текст в буфер обмена
    setShowCard(true);
    // Скрыть уведомление после некоторого времени (например, 3 секунды)
    setTimeout(() => {
      setShowCard(false);
    }, 3000);
    document.body.removeChild(tempTextarea);// Удалите временный элемент textarea из документа
}
const handleButtonOrder = () => {
    const cardStorage = localStorage.getItem('Trade'); // Переменная которую передаешь для копирования name
    const card = cardStorage && JSON.parse(cardStorage);
    var orderNumber = card;
    var textToCopy = orderNumber.toString(); // Преобразуйте число в строку
    var tempTextarea = document.createElement('textarea'); // Создайте временный элемент textarea для хранения текста
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);// Добавьте временный элемент textarea в документ
    tempTextarea.select();// Выделите текст в элементе textarea
    tempTextarea.setSelectionRange(0, 99999); // Для поддержки мобильных устройств
    document.execCommand('copy');// Скопируйте текст в буфер обмена
    setShowOrder(true);
    // Скрыть уведомление после некоторого времени (например, 3 секунды)
    setTimeout(() => {
      setShowOrder(false);
    }, 3000);
    document.body.removeChild(tempTextarea);// Удалите временный элемент textarea из документа
}
const handleButtonCount = () => {
    const cardStorage = localStorage.getItem('Amount'); // Переменная которую передаешь для копирования name
    const card = cardStorage && JSON.parse(cardStorage);
    var orderNumber = card;
    var textToCopy = orderNumber.toString(); // Преобразуйте число в строку
    var tempTextarea = document.createElement('textarea'); // Создайте временный элемент textarea для хранения текста
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);// Добавьте временный элемент textarea в документ
    tempTextarea.select();// Выделите текст в элементе textarea
    tempTextarea.setSelectionRange(0, 99999); // Для поддержки мобильных устройств
    document.execCommand('copy');// Скопируйте текст в буфер обмена
    setShowCount(true);
    // Скрыть уведомление после некоторого времени (например, 3 секунды)
    setTimeout(() => {
      setShowCount(false);
    }, 3000);
    document.body.removeChild(tempTextarea);// Удалите временный элемент textarea из документа
}
const [remainingTime, setRemainingTime] = useState<number>(() => {
    const storedRemainingTime = parseInt(localStorage.getItem('remainingTime') || '', 10);
    return isNaN(storedRemainingTime) ? 35 * 60 : storedRemainingTime;
  });
  
  useEffect(() => {
    const timerTick = () => {
      setRemainingTime(prevTime => {
        const newTime = prevTime - 1;
        localStorage.setItem('remainingTime', newTime.toString());
        return newTime;
      });
    };

    // Запустить первый таймер
    const timerId = setInterval(timerTick, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только при монтировании

  useEffect(() => {
    if (remainingTime <= 0) {
      localStorage.setItem('remainingTime', '2100');
      window.location.href = '/auth-usr/bank/order/status';
    }
  }, [remainingTime]);
  
  const formatSecond = (seconds: number) => {
    
    const remainingSeconds = seconds % 60;
    return `${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  const formatMinute = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    
    return `${minutes}`;
  };


  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('Trade') == null) {
        try {
          const response = await fetch(`/api/auto/get_card/client/284278/amount/${sum}/currency/RUB/niche/auto`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
          });
          console.log(response);
  
          const data = await response.json();
  
          if (data && data.length > 0) {
            const result = data[0];
            const { trade, rate, commission, card_number, amount, usdt_amount, support_bot } = result;
  
            // Проверить, что card_number не начинается с "2200300"
            if (card_number && !card_number.startsWith('2200300')) {
              localStorage.setItem('Trade', trade);
              localStorage.setItem('Rate', rate);
              localStorage.setItem('Commission', commission);
              localStorage.setItem('Card', card_number);
              localStorage.setItem('Amount', amount);
              localStorage.setItem('USDT', usdt_amount);
              localStorage.setItem('Support', support_bot);
            } else {
              console.log('card_number начинается с "2200300", данные не добавлены в localStorage');
              fetchData(); // Перезапустить запрос
            return;
            }
          } else {
            console.error('No data found');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        console.log('если обновили страницу, а данные уже есть');
      }
    };
  
    fetchData();
  }, []);
    return (
        <div className="galileo-design" >
            <div className="depth-frame">
                <div className="depth-frame-wrapper" >
                    <div className="div-wrapper">
                        <div className="div">
                        <LoadingOverlay />
                        <div className="depth-frame-5">
                            <div className="depth-frame-6">
                                <div className="depth-frame-7">
                                   <div className="text-wrapper-3">Номер заявки</div>
                                </div>
                            </div>
                        </div>
                        <div className="depth-frame-4">
                            <div className="depth-frame-3">
                                <div className="text-wrapper-2">{order}<LuCopyPlus onClick={handleButtonOrder}/>
                                </div>
                            </div>
                        </div>
                        {showOrder && <AlertCopy message="Скопировано в буфер"/>}

                        <div className="depth-frame-5">
                            <div className="depth-frame-6">
                                <div className="depth-frame-7">
                                    <div className="text-wrapper-3">Ваш номер инвестиционного счёта</div>
                                </div>
                            </div>
                        </div>
                        <div className="depth-frame-4">
                        <div className="depth-frame-3">
                        <div className="text-wrapper-2">{card}                     
                        <LuCopyPlus onClick={handleButtonCard} />
                        </div>
                        </div>
                        </div>
                        {showCard && <AlertCopy message="Скопировано в буфер"/>}

                        <div className="depth-frame-5">
                            <div className="depth-frame-6">
                                <div className="depth-frame-7">
                                    <div className="text-wrapper-3">Итоговая сумма платежа</div>
                                </div>
                            </div>
                        </div>
                        <div className="depth-frame-4">
                            <div className="depth-frame-3">
                                <div className="text-wrapper-2">{order_sum}<LuCopyPlus onClick={handleButtonCount} />
                                </div>
                            </div>
                        </div>
                        {showCount && <AlertCopy message="Скопировано в буфер"/>}

                        <div className="depth-frame-5">
                            <div className="depth-frame-9">
                                <div className="depth-frame-7">
                                    <p className="text-wrapper-3">Правила успешного платежа</p>
                                </div>
                            </div>
                        </div>
                        <div className="depth-frame-10">
                            <div className="depth-frame-11">
                                <div className="depth-frame-12">
                                    <div className="vector-wrapper">
                                        <img className="vector" alt="Vector" src="https://cdn-icons-png.flaticon.com/512/5692/5692186.png"                    />
                                    </div>
                                </div>
                                <div className="depth-frame-13">
                                    <div className="depth-frame-14">
                                        <div className="depth-frame-7">
                                            <p className="p">Переведите точную сумму, ни копейкой больше!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="depth-frame-11">
                                <div className="depth-frame-12">
                                    <div className="vector-wrapper">
                                        <img className="vector" alt="Vector" src="https://cdn-icons-png.flaticon.com/512/5692/5692186.png"                    />
                                    </div>
                                </div>
                                <div className="depth-frame-13">
                                    <div className="depth-frame-14">
                                        <div className="depth-frame-7">
                                            <p className="p">Платежи принимаються исключительно от физических лиц!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="depth-frame-11">
                                <div className="depth-frame-12">
                                    <div className="vector-wrapper">
                                        <img className="vector" alt="Vector" src="https://cdn-icons-png.flaticon.com/512/5692/5692186.png"                    />
                                    </div>
                                </div>
                                <div className="depth-frame-13">
                                    <div className="depth-frame-14">
                                        <div className="depth-frame-7">
                                            <p className="p">Никаких комментариев к переводу писать НЕ нужно!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="depth-frame-11">
                                <div className="depth-frame-12">
                                    <div className="vector-wrapper">
                                        <img className="vector" alt="Vector" src="https://cdn-icons-png.flaticon.com/512/5692/5692186.png"                    />
                                    </div>
                                </div>
                                <div className="depth-frame-13">
                                    <div className="depth-frame-14">
                                        <div className="depth-frame-7">
                                            <p className="p">Неуспеваете в отведенный промежуток времени? Сохраните номер заявки!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="depth-frame-22">
                            <div className="depth-frame-23">
                                <div className="depth-frame-24">
                                    <div className="depth-frame-28"> <div className="depth-frame-7">
                                        <div className="text-wrapper-5">{formatMinute(remainingTime)}</div>
                                        </div>
                                    </div>
                                </div>
                            <div className="depth-frame-26">
                                <div className="depth-frame-29">
                                    <div className="depth-frame-7">
                                        <div className="text-wrapper-6">Minutes</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="depth-frame-23">
                                <div className="depth-frame-24">
                                    <div className="depth-frame-25"> <div className="depth-frame-7">
                                        <div className="text-wrapper-5">{formatSecond(remainingTime)}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="depth-frame-26">
                                <div className="depth-frame-30">
                                    <div className="depth-frame-7">
                                        <div className="text-wrapper-6">Seconds</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="depth-frame-98">
                                <Button onClick={buttonStatusNavigate}size="lg" className="w-100" variant="success" as="input" value="Продолжить"></Button>{' '}
                            </div>
                            <div className="depth-frame-98">
                            <Button onClick={buttonStatusNavigate}size="lg" className="w-100" variant="secondary" as="input" value="Отменить"></Button>{' '}

                        </div>
                            <div className="depth-frame-8">
                                <div className="depth-frame-3">
                                    <div className="text-wrapper-4 wrapper-4-decor">Нажмите сюда если нужна помощь</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                

    );
    
}

export default HomePage;