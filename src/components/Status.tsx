import React from 'react';
import '../components/status__style.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';





interface FormProps {
  photo: string; // Или другой тип данных
  order: BigInteger;
  order_info: string;
  order_status: string; //* текст
  confirm_circle: string; //* confirm-logo-red' 'confirm-logo-mark-red'
  confirm_mark: string; //* confirm-logo-green' 'confirm-logo-mark-green'
  confirm_clock: boolean; //* для формы ожидания false, осталное true 
}

const Order: React.FC<FormProps> = ({ order, order_status, order_info, photo, confirm_circle, confirm_mark, confirm_clock }) => {
  

 
  const navigate = useNavigate();
 
 
  const onOrderClick = () => {
    navigate('/');
  }
  

  useEffect(() => {
    // Этот код будет выполнен при монтировании компонента и при каждом обновлении
    const fetchDataAndRefresh = async() => {
      switch(order_status){
        case "Оплата успешна":
          console.log("1");
          setTimeout(() => {
            window.location.href = '/'
          }, 60000)                                   // Перебрасываем юзера на начальную страницу после успешной оплаты 
          
          break;
        case "Заявка обрабатывается":
          console.log("12");
          setTimeout(() => {
            window.location.href = '/payment/bank/order-status-confirmed'
          }, 15000)                                                                 // // Перебрасываем юзера если Статус ордера confirmed 
          break;
        case "Оплата не прошла":
          console.log("13");
          setTimeout(() => {
            window.location.href = '/'
          }, 60000)                                     // Перебрасываем юзера на начальную страницу после неуспешной оплаты 
          break;
      }
    }
    const intervalId = setInterval(fetchDataAndRefresh, 15000);
    return () => {
      // при выходе срабатывает код ниже//
      
    };
  }, []);
   

  return (
    <div className="status-block">
        
      <h1>Статус заявки №{order}</h1>
      
      <div className="status-container">
        <div className="status-block-text">
            <h1>Подтверждение платежа</h1>
            <p> Не закрывайте вкладку.</p>
        </div>
        <div className="status-block-confirm">
            <img className="confirm-photo"src={photo} alt="" />
            <div className={confirm_circle}>
                <div className="confirm-logo-circle">
                    <div className={confirm_mark}>
                      {!confirm_clock && (
                        <>
                        <div className="confirm-logo-hour"></div>
                        <div className="confirm-logo-minute"></div> 
                        </>
                      )}
                        
                    </div> 
                </div>
            </div>
            <h2>{order_status}!</h2>
            <h4>{order_info}</h4>
        </div>
        <button type='button' onClick={onOrderClick} className='btn-confirm'>Вернуться на платформу</button>
      </div>
    </div>
    );
    
}

export default Order;