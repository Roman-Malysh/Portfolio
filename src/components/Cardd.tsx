import classNames from 'classnames';
import React from 'react';
import './Mixins.scss'
import './Carddd.scss';

type Props = {
  url: string,
  text: string,
  tech: string,
  icon: string,
  webLink: string,
  isDarkMode: boolean,
};

export const Cardd: React.FC<Props> = ({url, text, tech, icon, webLink, isDarkMode}) => {
  return (
    <div className='wrap'>
      <a
        href={webLink}
        className={classNames('link', {isDarkMode})} 
      >
        Click for details
      </a>
      <figure className='snip1321'>
        <img src={url} alt='sq-sample26' />
        <figcaption>
          <img className='ion-circle' src={icon}></img>
          <h4>{text}</h4>
          <h2>{tech}</h2>
        </figcaption>
      </figure>
    </div>
  );
};
