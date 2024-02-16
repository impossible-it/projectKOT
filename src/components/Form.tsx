import React, { useState } from 'react';
import '../components/form__style.css';
import { useNavigate } from 'react-router-dom'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useInRouterContext } from 'react-router-dom';







interface FormProps {
  data: string; // Или другой тип данных
  photo: string;
  background: string;
}


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


const isNumeric = (value: string) => /^\d+$/.test(value);


const MyForm: React.FC<FormProps> = ({ data, photo, background }) => {
  const { register, handleSubmit, clearErrors, reset,
    formState: {errors}} = useForm<FormInput>({
    defaultValues: {},
  });

  const navigate = useNavigate();

  const onSubmit = (formData: FormInput) => {
    // Handle form submission logic here
    console.log(formData);
   
  };
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!isCheckboxChecked);
  };


  

  const submit: SubmitHandler<FormInput> = data => {
    console.log("submit")
    console.log(data)
    navigate('/payment/bank');
    localStorage.setItem('userdata', JSON.stringify(data));
  }

  return (
    <div className="block" style={{ background }}>
      <h1>Заполните форму ниже</h1>

      <div className="form-container">
        <div className="form-container-logo">
          <img src={photo} alt="" />
          <h2>{data}</h2>
        </div>
        <form onSubmit={handleSubmit(submit, error)}>

          <input  
            className="form-input"
            placeholder="Имя Фамилия"
            type="text"
            id="name"
            {...register('name',{required: 'Заполните пустые поля', minLength: {
            value: 3,
            message: 'Некоректная длина имени. Имя и фамилия должны содержать больше трёх букв. '},
            validate: value => isName(value) || " Имя и фамилия некоректны" })} 
            aria-invalid= {errors.name ? true:false }/>
          {errors.name && <p>{errors.name.message}</p> }

          
          <input 
            className="form-input"
            placeholder="Телефон"
            type='tel'
            id='phone'
            defaultValue={''}
            {...register('phone' ,{required: 'Номер телефона обьязателен',
            validate: value => (isNumeric(value.toString()) 
            && value.toString().startsWith('9') 
            && value.toString().length === 10) || 'Напишите свой номер телефон начиная с цифры 9  (без +7)'})}
            aria-invalid={errors.phone ? true:false }/>
            {errors.phone && <p>{errors.phone.message}</p>}

            <input
            className="form-input" 
            placeholder="Сумма"
            type="number"
            id="summ"
            {...register('summ',{required: 'Заполните пустые поля', minLength: {
            value: 3,
            message: 'Некоректная сумма. Сумма должна быть больше чем 99 рублей.'},
            validate: value => (isNumeric(value.toString()) 
            && value.toString().length < 7) || 'Неверная сумма. min.: 100 рублей, max.: 999.999 рублей '})}
            aria-invalid= {errors.summ ? true:false }/>
          {errors.summ && <p>{errors.summ.message}</p>}

          <div className="checkbox-container">
            <input type="checkbox" id="agreement" required />
            <label htmlFor="agreement">
              <p>Пользовательское соглашение и политика конфиденциальности. <br />
              Условия пользовательского соглашения.</p>
            </label>
          </div>
          <button type='button' className="clear-button" onClick = { () => {reset({ phone: '' , name: '', summ:''}); clearErrors()}}>Очистить</button>      
          <button type="submit" className="submit-button">Подтвердить</button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;