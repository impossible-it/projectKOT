import { useEffect, useState, useRef } from 'react';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import '../mobile/mobile__style.css'
import React from 'react';
import { checkOperator } from '../mobile/MobileBase.ts'

interface FormInput {
    mobilenum: number;
  }

const error: SubmitErrorHandler<FormInput> = data => {
  console.log('err')
  console.log(data)
}

const onSubmit = (data: FormInput) => {
  console.log(data);
};

function isFormEmpty() {
    var inputs = document.querySelectorAll('.js-input');
    var contactForm = document.querySelector('.input-text')
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() !== '') {
            contactForm?.classList.add('not-empty')
        } else {
            contactForm?.classList.remove('not-empty')
        }
    }
}
var mobileResult = ''
var clientMobile = ''
const MobileInfo = () => {
    
    const navigate = useNavigate();
    const submitMobileCheck = () => {        
        const mobilenum = localStorage.getItem('mobilenum');
        const parsedData = JSON.parse(mobilenum);
        const phoneNumber = parsedData.mobilenum;
        console.log(phoneNumber);
        
        if (phoneNumber !== '') {
            clientMobile = phoneNumber;
            mobileResult = checkOperator(phoneNumber); 
            return mobileResult
        } else {
            clientMobile = phoneNumber;
            mobileResult = 'Номер не действителен' ;
            return mobileResult
        }
        
        
    }
    const submit: SubmitHandler<FormInput> = data => {
        console.log("submit")
        console.log(data)
        localStorage.setItem('mobilenum', JSON.stringify(data));
        submitMobileCheck();
        var getForm = document.querySelector('.get-in-touch');
        var catContainer = document.querySelector('.cat_container');
        var getResult = document.querySelector('.get-in-result')
        catContainer?.classList.remove('d-none');
        getForm?.classList.add('d-none')
        getResult?.classList.remove('d-none')
     }
    const { register, handleSubmit, clearErrors, reset,
       formState: {errors}} = useForm<FormInput>({
       defaultValues: {},
     });
    const isNumeric = (value) => /^\d+$/.test(value);
 
    const clickCat = () => {
        var catContainer = document.querySelector('.cat_container');
        var getForm = document.querySelector('.get-in-touch');
        var getResult = document.querySelector('.get-in-result')
        var getText = document.querySelector('.text-wrapper-4')
        getText?.classList.add('d-none')
        getResult?.classList.add('d-none')
        catContainer?.classList.add('d-none');
        getForm?.classList.remove('d-none');
    }
    return (
        <div className="form-page">
        <div className="depth-frame">
          <div className="depth-frame-wrapper">
            <div className="div-wrapper">
              <div className="div">
                    <div className='p-2'></div>
                
                    <div className="depth-frame-7">
                        <p className="text-wrapper">
                            КП Сервис                        </p>
                        <p className="text-wrapper-4">
                            Тыкни в кота

                        </p>
                    </div>
                

                <div className='mobile-container'>
                    
                    <div onClick={clickCat}className="cat_container">
                            <div className="cat">
                                <div className="paw"></div>
                                <div className="paw"></div>
                                <div className="shake">
                                    <div className="tail"></div>
                                    <div className="main">
                                        <div className="head"></div>
                                        <div className="body">
                                            <div className="leg"></div>
                                        </div>
                                        <div className="face">
                                            <div className="mustache_cont">
                                                <div className="mustache"></div>
                                                <div className="mustache"></div>
                                            </div>
                                            <div className="mustache_cont">
                                                <div className="mustache"></div>
                                                <div className="mustache"></div>
                                            </div>
                                            <div className="nose"></div>
                                            <div className="eye"></div>
                                            <div className="eye"></div>
                                            <div className="brow_cont">
                                                <div className="brow"></div>
                                                <div className="brow"></div>
                                            </div>
                                            <div className="brow_cont">
                                                <div className="brow"></div>
                                                <div className="brow"></div>
                                            </div>
                                            <div className="ear_l">
                                                <div className="inner"></div>
                                            </div>
                                            <div className="ear_r">
                                                <div className="outer"></div>
                                                <div className="inner"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className='get-in-result d-none' >
                        <p className="title">+7{clientMobile}</p>
                        <h1 className="title">{mobileResult}</h1>

                    </div>

                    <div className="get-in-touch d-none">
                        {/* <h1 className="title">Введите номер</h1> */}
                        <form className="contact-form row" onSubmit={handleSubmit(submit, error) } onMouseLeave={isFormEmpty}>
                            <div className="form-field col-lg-6">
                                <input id="phone" className="input-text js-input " type="phone" required
                                {...register('mobilenum' ,{required: 'Номер телефона обьязателен',
                                validate: value => (isNumeric(value.toString()) 
                                && value.toString().startsWith('9') 
                                && value.toString().length === 10) || 'Напишите свой номер телефон начиная с цифры 9  (без +7)'})}
                                aria-invalid={errors.mobilenum ? true:false }/>
                                <label className="label" htmlFor="name">Номер телефона</label>
                            </div>
            
                            <div className="w-100 d-flex justify-content-center align-item-center row get-in-button">
                                {errors.mobilenum && <p className=''>{errors.mobilenum.message}</p>}
                                <input className="submit-btn" type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-center align-item-center '>
                    <h1> База данных не имеет следующие префиксы: </h1>
                    <p className='p-2 text-wrapper-5'>
                      908 930 931 932 933   
                      934 938 939 950 953
                      958 967 968 969 977        
                      978 980 981 982 983
                      984 985 986 991 992
                      993 994 995 996 997
                       </p>
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MobileInfo;