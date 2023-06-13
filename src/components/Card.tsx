import classNames from 'classnames';
import {useState, useRef} from 'react';
import { TypeAnimation } from 'react-type-animation';
import useOnScreen from './VisibilityHook';
import '../App.scss';

type Props = {
  url: string,
  text: string,
  tech: string,
  isDarkMode: boolean
}

export const Card: React.FC<Props> = ({url, text, tech, isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  
  return (
    <div
      className={classNames('work-card-wrap',{ isDarkMode})}
    >
        <div className={classNames('work-card-wrap__wrap',{ isDarkMode})}

        >
         {isHovered && (
           <TypeAnimation
           ref={ref}
           onMouseEnter={() => setIsHovered(true)}
           className={classNames('work-card-wrap__title', { isHovered })}
           sequence={[
             `${text}`,
             1000,
             `${tech}`,
             1000,
         ]}
       wrapper="p"
       cursor={true}
       repeat={0}
       style={{ fontSize: '10px', display: 'inline-block' }}
     />
         )}
        </div>
          <div
            className='work-card-wrap__circle'
            style={{ backgroundImage: `url(${url})`, backgroundColor: 'gray', backgroundSize: 'cover', }}  
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}  
          ></div>
        </div>
  )
}