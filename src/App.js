import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Form from './components/Form.tsx'
import Home from './components/Home.tsx'
import Order from './components/Order.tsx'

import Status from './components/Status.tsx'
import tinkoff from './components/img/tinkoff.svg'
import sber from './components/img/sber.svg'
import gaz from './components/img/gaz.svg'
import gaz2 from './components/img/gaz2.svg'
import flk from './components/img/flk.svg'
import other from './components/img/other.svg'
import raif from './components/img/raif.svg'





function App() {
  return (
    <Router>
      {/* Header */}
      <Header/> 
      {/* Выбор проекта */}
      <Routes>
        <Route path="/" element= {<Home data_first='Сбербанк Инвестиции' 
          data_second='Тинькофф Инвестиции'
          data_third = 'Газпром Инвестиции'
          data_fourth =  'Binance Инвестиции'
          photo_first = {sber}
          photo_second =  {tinkoff}
          photo_third =  {gaz}
          photo_fourth = {flk}
          link={true}
          text_start='Выберите проект' 
        />}/>
      </Routes>
      {/* Форма */}
      <Routes>
        <Route path="/payment-sberbank" element= {<Form data='Сбербанк' photo={sber} background='background-color: grey;'/>}/>
      </Routes>
      <Routes>
        <Route path="/payment-tinkoff" element= {<Form data='Тинькофф' photo={tinkoff}/>}/>
      </Routes>
      <Routes>
        <Route path='/payment-gazprom' element= {<Form 
        data='Газпром' 
        photo={gaz2}
        background='background-color: blue;'/>}/>
      </Routes>
      <Routes>
        <Route path='/payment-flk' element= {<Form 
        data='Binance' 
        photo={flk}
        background='background-color: white;'/>}/>
      </Routes>
      {/* Выбор банков */}
      <Routes>
        <Route path='/payment/bank' element={<Home data_first='Cбербанк'
          data_second='Тинькофф'
          data_third = 'Райффайзен'
          data_fourth =  'Другой банк'
          text_start='Выберите банк для оплаты' 
          photo_first = {sber}
          photo_second =  {tinkoff}
          photo_third =  {raif}
          photo_fourth = {other}
          link={false}
          text_style= {{fontWeight:'bold', fontFamily:  'Open Sans', fontSize: '24px',}}
      />}/>
      </Routes>
      {/* Окно заявки */}
      <Routes>
        <Route path='payment/bank/order' element={<Order
        client_number={284278}
        sum={10000}/>}/>
      </Routes>
      {/* Статус заявки */}
      <Routes>
        <Route path='payment/bank/order-status' element={<Status
          order= '60895'
          order_info= 'Ожидайте подтверждения это занимает порядка 5-10 минут.'
          order_status= 'Заявка обрабатывается'
          confirm_circle= 'confirm-logo-wait'
          confirm_mark= 'confirm-logo-mark-wait'
          confirm_clock= {false}/> } />
      </Routes>
      <Routes>
        <Route path='payment/bank/order-status-confirmed' element={<Status
          order= '60895'
          order_info= 'Проверьте зачисление средств на ваш счёт'
          order_status= 'Оплата успешна'
          confirm_circle= 'confirm-logo-green'
          confirm_mark= 'confirm-logo-mark-green'
          confirm_clock={true}/>}/>
      </Routes>    
      <Routes>
        <Route path='payment/bank/order-status-failed' element={<Status
          order= '60895'
          order_info= 'Обратитесь в поддержку или повторите попытку позже.'
          order_status= 'Оплата не прошла'
          confirm_circle= 'confirm-logo-red'
          confirm_mark= 'confirm-logo-mark-red'
          confirm_clock={true}/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
