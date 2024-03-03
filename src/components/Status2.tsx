import React from 'react';
import '../components/status2__style.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { LuCopyPlus } from "react-icons/lu";
import { useEffect, useState, useRef } from 'react';
import { useTimer } from 'react-timer-hook';
import { SquareLoader } from 'react-spinners';

interface FormProps {
    order: number;
  }
function MyTimer({ expiryTimestamp }) {
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
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
    return (
      <div style={{ textAlign: 'center' }}>
        <h1></h1>
        <p>.</p>
        <div style={{ fontSize: '100px' }}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p>Идёт процесс...</p>
        <div className='p-5'>
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
    
    const StatusPage:React.FC<FormProps> = ({ order }) => {
    const orderStorage = localStorage.getItem('Trade')
    order = orderStorage && JSON.parse(orderStorage);
    useEffect(() => {
        const fetchData = async () => {
          try {
            
            setLoadingProp(65)
            const response = await fetch(`/api/check_trade/trade/${order}`, { 
              method: 'GET', 
              mode: 'cors',
              headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }});
            console.log(response);
            const data = await response.json();
    
            if (data && data.length > 0) {
              const obj = data[0];
              const { result, message } = obj;
              localStorage.setItem('Resultation', result);
              localStorage.setItem('ResultMessage', message);
              console.log(result);
              console.log(message);   
              switch (result) {
                case 'error': 
                setInterval( () => setLoadingProp(77), 2000)
                setInterval( () => window.location.reload(), 10000)
                break;
                case 'success': 
                setInterval( () => setLoadingProp(100), 2000)
                setInterval( () => window.location.reload(), 10000)
                break;
                default: 
                break;
              }           
            } 
          } catch (error) {
            console.error('Error fetching data:', error);
            setInterval( () => setLoadingProp(0), 2000)
            
            setInterval( () => window.location.reload(), 20000)
          } 
        }; fetchData();
      }, [])
    const [showOrder, setShowOrder] = useState(false);
    const [loadingProp, setLoadingProp] = useState(0);
    const result = localStorage.getItem('Resultation')
    
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
            <div className="depth-frame-5">
                            <div className="depth-frame-6">
                                <div className="depth-frame-7">
                                   <div className="text-wrapper-3">Номер заявки</div>
                                </div>
                            </div>
                        </div>
                        <div className="depth-frame-4">
                            <div className="depth-frame-3">
                                <div className="text-wrapper-2"><LuCopyPlus onClick={handleButtonOrder}/>
                                </div>
                            </div>
                        </div>
                        {showOrder && <AlertCopy message="Скопировано в буфер"/>}
            
            <div className='status-photo'>
            
            {result === 'failure' && (
        <div>
          {/* Блок 1 */}
          <MyTimer expiryTimestamp={time} />
        </div>
      )}

      {result === 'error' && (
        <div>
          {/* Блок 3 */}
          <section className="c-container">
            <div className="o-circle c-container__circle o-circle__sign--failure">
              <div className="o-circle__sign"></div>
            </div>
          </section>
          <div className='status-photo-text'>
            <span className='loader-3'>Ошибка 707</span>
          </div>
        </div>
      )}

      {(result === 'success') && (
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
            <div className="depth-frame-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper"> 
                    {result === 'success' && (
                        <p>Ожидайте зачисления платежа от 3 до 15 минут</p>
                    )}{result === 'failure' && (
                        <p>Средства зачисляються на ваш счёт</p>

                    )}{result === 'error' && (
                        <p>Что-то пошло не так!</p>
                    )}
                    </div>
                </div>
            </div>
            <div className="depth-frame-2">
                <div className="depth-frame-3">
                    <div className="text-wrapper">{result === 'success' && (
                        <p>Платеж обратывается системой</p>
                    )}      {result === 'failure' && (
                        <p>Проверьте зачисление</p>
                    )}
                    {result === 'error' && (
                        <p>Обратитесь в службу поддержки или повторите попытку позже</p>
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
                    <p className="text-wrapper-4">Дабы избежать неприятных ситуаций, после оплаты обьязательно сохраните чек и номер заявки</p> 
                </div>
            </div>
            
            <div className="depth-frame-98">
                  <Button size="lg" className='w-100' variant="dark" as="input" value="Вернуться на платформу"></Button>{' '}
            </div> 
            <div className="depth-frame-8">
                <div class="depth-frame-3">
                    <div class="text-wrapper-4 wrapper-4-decor">Нажмите сюда если нужна помощь</div>
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