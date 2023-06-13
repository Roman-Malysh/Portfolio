import React, {FormEvent, useRef, useState} from 'react';
import { SCSSButton} from './SCSSButton';
import emailjs from '@emailjs/browser';
import './ContactUs.scss';
import classNames from 'classnames';


export const ContactUs = ({isDarkMode}) => {
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorText, setIsErrorText] = useState(false);
  const [buttonSuccess, setButton] = useState(false);
  const [buttonError, setIsError] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('send')
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');
  const form = useRef();

  const emailPattern = email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setIsErrorName(true);
      setButton(false);
      setIsError(true);
      setTitle('Try again...');
      return;
    }
    if (!emailPattern) {
      setIsErrorEmail(true);
      setButton(false);
      setIsError(true);
      setTitle('Not really...');
      return;
    }
    if (textArea.trim().length < 4) {
      setIsErrorText(true);
      setButton(false);
      setIsError(true);
      setTitle('Fix it please...');
      return;
    }

    if (form.current) {
      setButton(true);
      emailjs
        .sendForm(
          'service_xmipkxy',
          'template_tmwutqk',
          form.current,
          'XiUuNu90IycwcfOF3'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };

  return (
    <form ref={form} onSubmit={(e) => sendEmail(e)}>
      <input
        type='text'
        name='user_name'
        className={classNames('input',{'dark': isDarkMode})}
        placeholder='Enter your name'
        onChange={(e) => {
          setName(e.target.value);
          setIsErrorName(false);
          setButton(false);
          setIsError(false);
          setTitle('send');
        }}
      />
      <p className={classNames('error_message', {'isErrorName':isErrorName, 'isDarkModeP': isDarkMode})}>Enter your name</p>
      <input
        type='text'
        name='user_email'
        className={classNames('input',{'dark': isDarkMode})}
        placeholder='Enter your email'
        onChange={(e) => {
          setEmail(e.target.value);
          setIsErrorEmail(false);
          setButton(false);
          setIsError(false);
          setTitle('send');
        }}
      />
      <p className={classNames('error_message', {isErrorEmail, 'isDarkModeP': isDarkMode})}>Enter valid email</p>
      <textarea
        name='message'
        className={classNames('textarea',{'dark': isDarkMode})}
        placeholder='Enter your message'
        onChange={(e) => {
          setTextArea(e.target.value);
          setIsErrorText(false)
          setButton(false);
          setIsError(false);
          setTitle('send');
        }}
      />
      <p className={classNames('error_message', {isErrorText, 'isDarkModeP': isDarkMode})}>Your message has to be 4 digits at least</p>
      <button
        className={classNames('contactUs-wrap', {isDarkMode})}
        type='submit'
      >
        <div className='containerR'>
      <button
        id='btn'
        className={classNames('button', {'active': buttonSuccess, 'error': buttonError, 'dark': isDarkMode})}
        onClick={() => {
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
      </button>
    </form>
  );
};
