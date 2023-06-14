import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import classNames from 'classnames';
import {Navbar} from './components/Navbar';
import {Menu} from './components/Menu';
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import {AiOutlineAlignRight} from 'react-icons/ai';
import {TypeAnimation} from 'react-type-animation';
import VisibilitySensor from 'react-visibility-sensor';
import disableScroll from 'disable-scroll';
import './App.scss';
import {Card} from './components/Card';
import {Cardd} from './components/Cardd';
import {SCSSButton} from './components/SCSSButton';
import {Button} from './components/Button';
import {SocialIcon} from './components/SocialIcon';
import {Massage} from './components/Massage';
import {ContactUs} from './components/ContactUS';
import { BirdContainer } from './components/BirdContainer';

export const App: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonSuccess, setButton] = useState(false);
  const reverse = isDarkMode === false;

  useEffect(() => {
    const blockScroll = () => {
      isNavOpen ? disableScroll.on() : disableScroll.off();
    };
    blockScroll();
  }, [isNavOpen]);

  useEffect(() => {
    const blockScroll = () => {
      disableScroll.on();
      setTimeout(() => {
        disableScroll.off();
      }, 11000);
    };
    blockScroll();
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  return (
    <>
      <body className={classNames('body appearBody', {isDarkMode})}>
        <div style={{position: 'absolute', top: '200px'}}>
        <BirdContainer />
        </div>
        <div style={{position: 'absolute', top: '400px'}}>
        <BirdContainer />
        </div>
        <div id='test'></div>
        <header className={classNames({isDarkMode})}>
          <Navbar
            isNavOpenn={isNavOpen}
            isDarkModee={isDarkMode}
            setIsNavOpen={setIsNavOpen}
            setDarkMode={setDarkMode}
          />
          <div className={classNames('headerWrapper appearance', {isDarkMode})}>
            <Button
              isDarkMode={isDarkMode}
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
            />
            <DarkModeSwitch
              style={{marginBottom: '2rem'}}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={30}
              className='test'
              color='lighblue'
            />
          </div>
        </header>
        <main className={classNames({isNavOpen})}>
          <>
            <TypeAnimation
              sequence={[
                100,
                'Hi! My name is Roman.',
                100,
                'I`m',
                100,
                'I`m a Web Developer....',
                100,
                'I`m',
                100,
                'I`m a marketing specialist....',
                300,
                'I`m a human....',
                300,
                'Roman Malysh' + '- React developer',
              ]}
              wrapper='span'
              cursor={true}
              repeat={0}
              style={{
                fontSize: '20px',
                display: 'inline-block',
                zIndex: '100',
                textAlign: 'center',
                height: '100px',
              }}
            />
            <div className={classNames('photo appearance', {isNavOpen})}></div>
            <a
              style={{marginTop: '80px', marginBottom: '80px'}}
              className='appearance lalita'
              href='./CV_Roman_Malysh[React_Developer].pdf'
              download
            >
              <SCSSButton
                isDarkMode={isDarkMode}
                titleStr='Download CV'
                newTitle='Thanks'
                setIsSuccess={setButton}
                isSuccess={buttonSuccess}
              />
            </a>
            <p className={classNames('about appearance', {isDarkMode})}>
              Front End Developer with Digital Marketing commercial experiance
              of building websites & single page applications using React JS and
              other modern JS tools & frameworks. My primary stack is React &
              TS. I am also familiar with Vue JS & Next JS.
            </p>
          </>
          <section>
            <h2 className={classNames('section_h2 appearance', {isDarkMode})}>
              Experience
            </h2>
            <p className='exp appearance'>
              I have started my jorney in Majorel on Youtube project on
              moderator position. It was quite fun and I gained corpo life and
              ethics experiance there. But i realised at one moment that I want
              to develop in coding sphere and have moved to another vendor and
              project which was dealing with web technologies and JS code. My
              task was to asisst Google clients while they implementing some
              code or data on their websites. I ve been dealing with cookie
              banner , JS functions and other pieces of the code a lot and
              gained huge marketing base as well.
            </p>
          </section>
          <h2 className='section_h2'>Featured works</h2>
          <section id='works'>
            <Cardd
              url='https://i.ibb.co/18sKk0D/Screenshot-2023-06-07-at-19-54-19-2.png'
              text='Sumy Progress Detailing'
              tech='HTML5/SCSS'
              icon='https://www.pngfind.com/pngs/m/683-6834215_html-css-js-icon-hd-png-download.png'
              webLink='https://progressdetailing.com.ua/'
              isDarkMode={isDarkMode}
            />
            <Cardd
              url='https://www.freakyjolly.com/wp-content/uploads/2019/03/todo.gif'
              text='Lists of Posts with API'
              tech='React/TypeScript/SCSS'
              icon='https://repository-images.githubusercontent.com/318576591/a7182780-3625-11eb-925d-adc07c4e5e7c'
              webLink='https://roman-malysh.github.io/react_dynamic-list-of-posts/'
              isDarkMode={isDarkMode}
            />
            <Cardd
              url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2MWwvfDM72CSw9gBm3wjZAhn0iqhz1YTUMkYjiVunPVAH7ABY8M2RJ0Gz3t1ZHTXqgs&usqp=CAU'
              text='MiBike'
              tech='HTML5/SCSS/JS'
              icon='https://www.pngfind.com/pngs/m/683-6834215_html-css-js-icon-hd-png-download.png'
              webLink='https://roman-malysh.github.io/layout_miami/'
              isDarkMode={isDarkMode}
            />
            <Cardd
              url='https://cloudinary.time2hack.com/upload/todo-app.png'
              text='List of Todos with API'
              tech='React/TypeScript/SCSS'
              icon='https://repository-images.githubusercontent.com/318576591/a7182780-3625-11eb-925d-adc07c4e5e7c'
              webLink='https://roman-malysh.github.io/react_todo-app-with-api/'
              isDarkMode={isDarkMode}
            />
          </section>
          <section>
            <h2 className='section_h2'>Technologies & skills</h2>
            <div className='skills'>
              <div className={isDarkMode ? 'isDarkModeP' : 'skillsDiv'}>
                <p>JavaScript, TypeScript</p>
                <p>React, Redux</p>
                <p>HTML5/CSS3, SASS</p>
                <p>NodeJS, ExpressJS</p>
              </div>
              <div className={isDarkMode ? 'isDarkModeP' : 'skillsDiv'}>
                <p>JSON, AJAX, REST Api</p>
                <p>SQL basic knowledge (MySQL)</p>
                <p>Git, Gulp, Webpack, Npm</p>
                <p>Photoshop, Figma</p>
              </div>
            </div>
          </section>
          <section id='contactUs'>
            <h2 className='section_h2'>Leave me a message</h2>
            <ContactUs isDarkMode={isDarkMode} />
          </section>
        </main>
        <footer className='footer'>
          <p>&copy; Roman Malysh</p>
          <div className='socials'>
            <div className='footer__icon'>
              <SocialIcon
                social='fa-brands fa-github'
                link='https://github.com/Roman-Malysh'
              />
              <SocialIcon
                social='fa-brands fa-linkedin-in'
                link='https://www.linkedin.com/in/roman-malysh/'
              />
            </div>
          </div>
        </footer>
      </body>
    </>
  );
};

export default App;
