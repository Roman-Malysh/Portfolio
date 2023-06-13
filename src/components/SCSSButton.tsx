import {useEffect, useState} from 'react';
import classNames from 'classnames';
import './SCSSButton.scss';

type Props = {
  isDarkMode: boolean;
  titleStr: string;
  newTitle: string;
  setIsSuccess: (success: boolean) => void,
  isSuccess: boolean,
};

export const SCSSButton: React.FC<Props> = ({
  isDarkMode,
  titleStr,
  newTitle,
  setIsSuccess,
  isSuccess,
}) => {
  const [title, setTitle] = useState(titleStr);
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setTitle(title);
  },[title])

  return (
    <div className={classNames('divButton', {isDarkMode})}>
      <button
        id='btn'
        className={classNames('button', {'active': isSuccess, 'dark': isDarkMode})}
        onClick={() => {
          setIsSuccess(true);
          setTitle(newTitle);
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
  );
};
