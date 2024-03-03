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
    const fetchData = async () => {
      
      try {
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
          
          
        } else {
          console.error('No data found');
        }
      } catch (error) {
        
        
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, [])

  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const fetchDataAndRefresh = async () => {
      const resultStorage = localStorage.getItem('Resultation');
      const result = resultStorage;
      const messageStorage = localStorage.getItem('ResultMessage');
      const message = resultStorage;

      switch (result) {
        case "success":
          
          
          break;
        case "error":
          
          break;
        default:
          console.log("Unknown result");
          break;
      }
    };

    const intervalId = setInterval(fetchDataAndRefresh, 15000);

    return () => {
      // Очищаем интервал при размонтировании компонента
      clearInterval(intervalId);
    };
  }, [currentPage]);

  useEffect(() => {
    // Обновляем текущую страницу при изменении URL
    const handleLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
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