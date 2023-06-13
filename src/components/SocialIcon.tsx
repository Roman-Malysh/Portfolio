import React from 'react';
import './SkillComponent.scss'

type Props = {
  social: string,
  link: string,
}

export const SocialIcon:React.FC <Props> = ({ social, link }) => {
  return (
    <ul className='list'>
    <li>
    <a href={link}>
      <i className={`fab fa-${social} icon`}></i>    </a>
  </li>
  </ul>
  )
}