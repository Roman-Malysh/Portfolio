import {useEffect, useState} from 'react';
import classNames from 'classnames';
import {SocialIcon} from './SocialIcon';
import {AiFillCloseCircle} from 'react-icons/ai';
import {Button} from './Button';
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import './Navbar.scss';

type Props = {
  isDarkModee: boolean;
  isNavOpenn: boolean;
  setIsNavOpen: (isopen: boolean) => void;
  setDarkMode: (isopen: boolean) => void;
};

export const Navbar: React.FC<Props> = ({
  isDarkModee,
  isNavOpenn,
  setIsNavOpen,
  setDarkMode,
}) => {
  return (
    <a
      className={classNames('nav-body', {isDarkModee, open: isNavOpenn})}
      onMouseLeave={() => setIsNavOpen(false)}
      id='nav-body'
    >
      <nav className={classNames({isDarkModee})}>
        <a
          href='#test'
          className={classNames('a',{isDarkModee})}
          onClick={() => setIsNavOpen(false)}
        >
          HOME
        </a>

        <a
          href='#works'
          className={classNames('a',{isDarkModee})}
          onClick={() => setIsNavOpen(false)}
        >
          MY WORKS
        </a>

        <a
          href='#contactUs'
          className={classNames('a',{isDarkModee})}
          onClick={() => setIsNavOpen(false)}
        >
          CONTACTS
        </a>
      </nav>
      <div className='socialsWrap'>
        <SocialIcon
          social='fa-brands fa-github'
          link='https://github.com/Roman-Malysh'
        />
        <SocialIcon
          social='fa-brands fa-linkedin-in'
          link='https://www.linkedin.com/in/roman-malysh/'
        />
      </div>
    </a>
  );
};
