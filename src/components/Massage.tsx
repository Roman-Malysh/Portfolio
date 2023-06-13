import React, { FormEvent, useRef, useState } from 'react';
import classNames from 'classnames';
import emailjs from '@emailjs/browser';
import './Massage.scss';

type Props = {
  isDarkMode: boolean;
};

export const Massage: React.FC<Props> = ({isDarkMode}) => {
  const [buttonSuccess, setButton] = useState(true);
  const [title, setTitle] = useState('aasas');

  const form = useRef();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_xmipkxy', 'template_tmwutqk', form.current, 'XiUuNu90IycwcfOF3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  };


  return (
    <form>
      <label className='labelInput'>
        <input className='input' type='text' placeholder='Email Address' />
      </label>
      <label className='labelInput'>
        <input className='input' type='password' placeholder='Password' />
      </label>
      <label className='labelInput'>
        <textarea className='input textarea' placeholder='...' contentEditable={false} onChange={() => setButton(false)}/>
      </label>
      <div className='containerR'>
      <button
        id='btn'
        className={classNames('button', {'error': true})}
        onClick={() => {
          setButton(true);
          setTitle('str');
        }}
      >
        <p id='btnText'>{title}</p>
        <div className='check-box'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
            <path fill='transparent' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
          </svg>
        </div>
      </button>
    </div>
    </form>
  );
};
