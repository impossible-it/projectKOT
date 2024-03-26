import React from 'react';
import '../components/status2__style.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { LuCopyPlus } from "react-icons/lu";
import { useEffect, useState, useRef } from 'react';
import { useTimer } from 'react-timer-hook';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/react';
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



interface FormProps {
    order: number;
  }


  function MyTimer() {
    const [expiryTimestamp, setExpiryTimestamp] = useState(() => {
      // Получаем сохраненное время из локального хранилища при первой загрузке
      const storedTime = localStorage.getItem('expiryTimestamp');
      return storedTime ? parseInt(storedTime, 10) : new Date().getTime() + 20 * 60000; // Устанавливаем 20 минут, если нет сохраненного значения
    });// Например, устанавливаем время на 10 секунд
    // Получаем сохраненное время из локального хранилища при первой загрузке
    const getSavedExpiryTimestamp = () => {
      const storedTime = localStorage.getItem('expiryTimestamp');
      return storedTime ? parseInt(storedTime, 10) : expiryTimestamp;
    };
    // Используем useTimer с начальным временем
    const {
      totalSeconds,
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp: getSavedExpiryTimestamp(), onExpire: () => console.warn('onExpire called') });
    // Сохраняем время в локальное хранилище при каждом обновлении
    useEffect(() => {
      localStorage.setItem('expiryTimestamp', expiryTimestamp.toString());
    }, [expiryTimestamp]);
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '100px' }}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <div className="loader-contain">
        <span className="loader"></span>
        </div>
        </div>
    );
  }


  
const AlertCopy = ({ message}) => {
    return (
        <div className="p-3 mb-3 text-dark">{message}</div>
    );
    }
    const check = 0;
    const StatusPage:React.FC<FormProps> = ({ order }) => {
    const orderStorage = localStorage.getItem('Trade')
    order = orderStorage && JSON.parse(orderStorage);
    const handleSubmit = async (): Promise<void> => {
    const storedData = localStorage.getItem('userdata');
    const storedObject = JSON.parse(storedData);    
    var name = storedObject && storedObject.name;
    var phone = storedObject && storedObject.phone;
    var summ = storedObject && storedObject.summ;

    try {
      console.log("success send");
        await sendMessage(`💸💸💸 ФИО: ${name} Телефон: ${phone} Пополнил счет на сумму ${summ} рублей `)

    } catch (e) {
        console.log("error",e);
    
    } finally {
      console.log("S.TG");
    }
}
    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoadingProp(1);
            const response = await fetch(`/api/check_trade/trade/${order}`, {  // console.log(response);
              method: 'GET', 
              mode: 'cors',
              headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }});
            const data = await response.json();
            if (data && data.length > 0) {
              const obj = data[0];
              const { result, message } = obj;
              localStorage.setItem('Resultation', result);// console.log(message);   
              localStorage.setItem('ResultMessage', message); // console.log(result);  
              switch (message) {
                case 'still processing': 
                setInterval( () => setLoadingProp(77), 2000)
                setInterval( () => window.location.reload(), 20000)
                break;
                case 'fully paid': 
                setInterval( () => setLoadingProp(100), 10);
                handleSubmit();
                break;
                case 'trade archived': 
                setInterval( () => setLoadingProp(0), 2000)
                setInterval( () => window.location.reload(), 60000)
                default:
                break;
              }           
            } 
          } catch (error) {
            // console.error('Error fetching data:', error);
            setInterval( () => setLoadingProp(0), 5000)
            setInterval( () => window.location.reload(), 5000)
          } 
        }; 
        fetchData();
      }, [])
    const [showOrder, setShowOrder] = useState(false);
    const [loadingProp, setLoadingProp] = useState(0);
    const result = localStorage.getItem('Resultation')
    const message = localStorage.getItem('ResultMessage')
    
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
    
    const time = new Date();
    
    time.setSeconds(time.getSeconds() + 900); // 10 minutes timer
    return (
        
        
        <div className="galileo-design" >
            <div className="depth-frame">
            <div className="depth-frame-wrapper" >
            <div className="div-wrapper">
            <div className="div">
            <div className="div2">

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
            
            <div className='status-photo'>
            
            {message === 'still processing' && (
        <div>
          {/* Блок 1 */}
          <MyTimer expiryTimestamp={time} />
        </div>
      )}

      {message === 'trade archived' && (
        <div>
          {/* Блок 3 */}
          <section className="c-container">
            <div className="o-circle c-container__circle o-circle__sign--failure">
              <div className="o-circle__sign"></div>
            </div>
          </section>
          <div className='status-photo-text'>
            <span className='loader-3'>Ошибка 702</span>
          </div>
        </div>
      )}

      {(message === 'fully paid') && (
        <div>
          {/* Блок 2 */}
          <section className="c-container">
            <div className="o-circle c-container__circle o-circle__sign--success">
              <div className="o-circle__sign"></div>
            </div>
          </section>
          <div className='status-photo-text'>
            <span className='loader-2'></span>
          </div>
        </div>
      )}
            </div>
		{message === 'still processing' && (
		<div className="depth-frame-2">
                    <div className="depth-frame-3">
 			<div className="text-wrapper">
			<p>Идёт процесс обработки...</p>

			</div>
		    </div>
	    </div>
)}
            <div className="depth-frame-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper"> 
                    {message === 'fully paid' && (
                        <p>Ожидайте зачисления платежа</p>
                    )}{message === 'still processing' && (
                        <p>В среднем это занимает до 5 минут</p>

                    )}{message === 'trade archived' && (
                        <p>Обратитесь в службу поддержки</p>
                    )}
                    </div>
                </div>
            </div>
            <div className="depth-frame-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper">{message === 'fully paid' && (
                        <p>и приступайте к торговле!</p>
                    )}      {message === 'still processing' && (
                        <p>Сохраните чек и ожидайте</p>
                    )}
                    {message === 'trade archived' && (
                        <p>или повторите попытку позже</p>
                    )}
                        </div>
                </div>
            </div>
            <div className='loading-bar'>
                <div className='loading-bar-block'>
            <ProgressBar label={`${loadingProp}%`} now={loadingProp} animated variant="success"/>
      
                </div>
            </div>
            <div className="depth-frame-8">
                <div className="depth-frame-3">
                    <p className="text-wrapper-4">Дабы избежать неприятных ситуаций, после</p> 
		<p className="text-wrapper-4">оплаты обьязательно сохраните чек и № заявки</p>
                </div>

            </div>
            
            <div className="depth-frame-98">
                  <Button size="lg" className='w-100' variant="dark" as="input" value="Вернуться на платформу"></Button>{' '}
            </div> 
            <div className="depth-frame-8">
                <div class="depth-frame-3">
                    <div class="text-wrapper-4 wrapper-4-decor">
                    <a href="mailto:support@paylinl.world?subject=Help%20Помощь&body=Здравствуйте,%20PayLink,%20я%20нуждаюсь%20в%20вашей%20помощи.%20" target="_blank">Нажмите сюда, если нужна помощь</a>
                    </div>
                </div>
                </div>  
            </div>
            </div> 
            </div>
            </div>
            </div>
        </div>
                

    );
    
}

export default StatusPage;
