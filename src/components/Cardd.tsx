import classNames from 'classnames';
import React from 'react';
import './Mixins.scss'
import './Carddd.scss';

type Props = {
  url: string,
  isDarkMode: boolean,
  position: string,
  title: string,
  websiteLink: string,
  tech: string,
};

export const Cardd: React.FC<Props> = ({url, isDarkMode, position, title, websiteLink, tech}) => {
  return (
    <div className='wrap' >
      <img className='img' src={url} alt="img" style={{backgroundPosition: `${position}`}} />
      <h2 className='card__title'>{title}</h2>
      <img src={tech} alt="tech" className='card__tech' />
      <a href={websiteLink} className="card__link">visit website</a>
    </div>
  );
};
