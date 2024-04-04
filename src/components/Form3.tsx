import React from 'react';
import '../components/form2__style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/react';


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
  const buttonUserAcceptTerm = () => {
    window.open('https://payselection.com/term-of-use', '_blank'); // Replace 
  }
  const formatPhoneNumber = (inputValue) => {
    // Предполагаем, что введенное значение - это 9 цифр телефонного номера
    const formattedNumber = `+7 (${inputValue.slice(0, 3)}) ${inputValue.slice(3, 6)}-${inputValue.slice(6, 8)}-${inputValue.slice(8)}`;
    return formattedNumber;
  };
  const submit: SubmitHandler<FormInput> = data => {
    console.log("submit")
    console.log(data)
    navigate('/deutch/bank')
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
              <LoadingOverlay />

                <div className="depth-frame-2">
                  <div className="depth-frame-3">
                    <div className="depth-frame-4">
                      <div className="depth-frame-5"></div>
                    </div>
                  </div>
                  <div className="depth-frame-6">
                    <div className="depth-frame-7">
                      <p className="text-wrapper">
                        Greets you!
                      </p>
                    </div>
                  </div>
                  <div className="depth-frame-6">
                    <div className="depth-frame-7">
                      <p className="text-wrapper-98">
                        Fill empty fields and
                      </p>
                    </div>
                  </div>
                  <div className="depth-frame-6">
                    <div className="depth-frame-7">
                      <p className="text-wrapper-98">
                      amount of desired investments
                      </p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(submit, error)}>
                  <div className="depth-frame-9">
                    <div className="depth-frame-10">
                      
                      <div className="depth-frame-11">
                        <div className="depth-frame-12">
                          <div className="text-wrapper-2">First name and last name</div>
                        </div>
                        <div className="col-sm-12 w-100">
                    <div className="form-group">
                      
                        <input className="form-control" type="text" placeholder="Levin Mebe"{...register('name',{required: '', minLength: {
                          value: 3,
                          message: ' '},
                          validate: value => isName(value) || " " })} 
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
                          <div className="text-wrapper-2">Write your phone number</div>
                        </div>
                        <div className="col-sm-12 w-100">
                    <div className="form-group">
                      
                        <input className="form-control"
            placeholder="Phone number"
            type='tel'
            id='phone'
            defaultValue={''}
            {...register('phone' ,{required: ''})}
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
                          Enter the investment amount?
                          </p>
                        </div>
                        <div className="col-sm-12 w-100">
                    <div className="form-group">
                      
                        <input className="form-control" type="number" placeholder="100$"defaultValue={''}{...register('summ',{required: 'Заполните пустые поля', minLength: {
                          value: 3, 
                          message: ''},
                          validate: value => (isNumeric(value.toString()) 
                          && value.toString().length < 7) || 'min.: 100$ , max.: 999.999$  '})}
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
                            <div className="text-wrapper-3">Do you confirm the user agreement?</div>
                          </div>
                        </div>
                        <div className="depth-frame-20">
                          <div onClick={buttonUserAcceptTerm}className="depth-frame-19">
                            <p className="we-ll-use-this-to">Click here to explore</p>
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