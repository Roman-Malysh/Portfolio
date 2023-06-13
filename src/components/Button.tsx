import React from 'react';
import classNames from 'classnames';
import './Button.scss';

type Props = {
  isDarkMode: boolean;
  isNavOpen: boolean;
  setIsNavOpen: (isopen: boolean) => void;
};

export const Button: React.FC<Props> = ({
  isDarkMode,
  isNavOpen,
  setIsNavOpen,
}) => {
  return (
    <>
      <input
        type='checkbox'
        id='menu'
        className='hamburger-checkbox'
        onClick={() => setIsNavOpen(!isNavOpen)}
        checked={isNavOpen}
      />

      <div className='hamburger-icon'>
        <label htmlFor='menu' id='hamburger-label'>
          <span className={classNames({isDarkModeSpan: isDarkMode})}></span>
          <span className={classNames({isDarkModeSpan: isDarkMode})}></span>
          <span className={classNames({isDarkModeSpan: isDarkMode})}></span>
        </label>
      </div>
    </>
  );
};
