import React from 'react';
import '../components/form2__style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { FaRegCopyright } from "react-icons/fa";
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import InputMask from 'react-input-mask';


interface FormInput {
  name: string;
  phone: number;
  summ: number;
}

const error: SubmitErrorHandler<FormInput> = data => {
  console.log('err')
  console.log(data)
}

const onSubmit = (data: FormInput) => {
  console.log(data);
};


const isName = (value: string) => {
  // Проверяем, что строка состоит из двух слов, разделенных пробелом
  const nameAndSurname = value.split(' ');
  if (nameAndSurname.length !== 2) {
    return false;
  }
  // Проверяем, что каждое слово начинается с большой буквы
  const [name, surname] = nameAndSurname;
  const isNameValid = /^[A-ZА-Я][a-zа-я]*$/.test(name);
  const isSurnameValid = /^[A-ZА-Я][a-zа-я]*$/.test(surname);
  return isNameValid && isSurnameValid;
};

const isNumeric = (value) => /^\d+$/.test(value);


const Startform = () => {
  const [formattedValue, setFormattedValue] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const formattedInput = formatPhoneNumber(inputValue);
    setFormattedValue(formattedInput);
  };
  const navigate = useNavigate();
  const formatPhoneNumber = (inputValue) => {
    // Предполагаем, что введенное значение - это 9 цифр телефонного номера
    const formattedNumber = `+7 (${inputValue.slice(0, 3)}) ${inputValue.slice(3, 6)}-${inputValue.slice(6, 8)}-${inputValue.slice(8)}`;
    return formattedNumber;
  };
  const submit: SubmitHandler<FormInput> = data => {
    console.log("submit")
    console.log(data)
    navigate('/auth-usr/bank')
    localStorage.setItem('userdata', JSON.stringify(data));
  }
  const { register, handleSubmit, clearErrors, reset,
    formState: {errors}} = useForm<FormInput>({
    defaultValues: {},
  });
  
    return (
      <div className="form-page">
        <div className="depth-frame">
          <div className="depth-frame-wrapper">
            <div className="div-wrapper">
              <div className="div">
                <div className="depth-frame-2">
                  <div className="depth-frame-3">
                    <div className="depth-frame-4">
                      <div className="depth-frame-5"></div>
                    </div>
                  </div>
                  <div className="depth-frame-6">
                    <div className="depth-frame-7">
                      <p className="text-wrapper">
                        Приветсвуем!
                      </p>
                    </div>
                  </div>
                  <div className="depth-frame-6">
                    <div className="depth-frame-7">
                      <p className="text-wrapper-98">
                        Заполните Ваши персональные
                      </p>
                    </div>
                  </div>
                  <div className="depth-frame-6">
                    <div className="depth-frame-7">
                      <p className="text-wrapper-98">
                         данные и обьем вложений
                      </p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(submit, error)}>
                  <div className="depth-frame-9">
                    <div className="depth-frame-10">
                      
                      <div className="depth-frame-11">
                        <div className="depth-frame-12">
                          <div className="text-wrapper-2">Укажите Ваше имя и фамилию </div>
                        </div>
                        <div className="col-sm-12 w-100">
                    <div className="form-group">
                      
                        <input className="form-control" type="text" placeholder="Петр Петров"{...register('name',{required: 'Заполните пустые поля', minLength: {
                          value: 3,
                          message: 'Некоректная длина имени. Имя и фамилия должны содержать больше трёх букв. '},
                          validate: value => isName(value) || " Имя или фамилия некоректны. Повторите ввод." })} 
                          aria-invalid= {errors.name ? true:false }/>
                        {errors.name && <p>{errors.name.message}</p> } </div>
                </div>
                      </div>
                    </div>
                  </div>
                  <div className="depth-frame-9">
                    <div className="depth-frame-10">
                      
                      <div className="depth-frame-11">
                        <div className="depth-frame-12">
                          <div className="text-wrapper-2">Укажите Ваш номер телефона </div>
                        </div>
                        <div className="col-sm-12 w-100">
                    <div className="form-group">
                      
                        <input className="form-control"
            placeholder="Телефон"
            type='tel'
            id='phone'
            defaultValue={''}
            {...register('phone' ,{required: 'Номер телефона обьязателен',
            validate: value => (isNumeric(value.toString()) 
            && value.toString().startsWith('9') 
            && value.toString().length === 10) || 'Напишите свой номер телефон начиная с цифры 9  (без +7)'})}
            aria-invalid={errors.phone ? true:false }/>
            {errors.phone && <p>{errors.phone.message}</p>}</div>
                </div>
                      </div>
                    </div>
                  </div>
                  <div className="depth-frame-9">
                    <div className="depth-frame-10">
                      <div className="depth-frame-11">
                        <div className="depth-frame-12">
                          <p className="text-wrapper-2">
                            Укажите сумму желаемой инвестиции?
                          </p>
                        </div>
                        <div className="col-sm-12 w-100">
                    <div className="form-group">
                      
                        <input className="form-control" type="number" placeholder="12 199 рублей"defaultValue={''}{...register('summ',{required: 'Заполните пустые поля', minLength: {
                          value: 3, 
                          message: 'Некоректная сумма. Сумма должна быть больше чем 99 рублей.'},
                          validate: value => (isNumeric(value.toString()) 
                          && value.toString().length < 7) || 'Неверная сумма. min.: 100 рублей, max.: 999.999 рублей '})}
                          aria-invalid= {errors.summ ? true:false }/>
                          {errors.summ && <p>{errors.summ.message}</p>}
                          </div>
                </div>
                      </div>
                    </div>
                  </div>
                  <div className="depth-frame-15">
                    <div className="depth-frame-16">
                      <div className="depth-frame-17">
                        
                        <div className="depth-frame-18">
                          
                          <div className="depth-frame-19">
                            <div className="text-wrapper-3">Подтверждаете пользовательское соглашение?</div>
                          </div>
                        </div>
                        <div className="depth-frame-20">
                          <div className="depth-frame-19">
                            <p className="we-ll-use-this-to">Нажмите сюда для изучения</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="depth-frame-21">
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label=""                      
                          />
                    </div>
                  </div>
                  <div className="depth-frame-25">
                  <Button type="submit" size="lg" className="w-100" variant="success" as="input" value="Продолжить"></Button>{' '}
                  </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
}

export default Startform;