import {useState} from 'react';
import classNames from 'classnames';
import './SCSSButton.scss';

type Props = {
  isDarkMode: boolean;
  titleStr: string;
  file: string;
  download: boolean;
  newTitle: string;
  setIsSuccess: (success: boolean) => void,
  isSuccess: boolean,
};

export const FormButton: React.FC<Props> = ({
  isDarkMode,
  titleStr,
  file,
  download,
  newTitle,
  setIsSuccess,
  isSuccess,
}) => {
  const [title, setTitle] = useState(titleStr);

  return (
    <div className='containerR'>
      <button
        id='btn'
        className={classNames('button', {'error': isSuccess})}
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
