import React, {useRef} from 'react'
import "./Header.scss"
import Logo from "../../assets/logo.png"
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const Open = useRef(null);
  const active = () => {
    Open.current.classList.toggle('active');
};
  return (
    <div className='header'>
     <img className='logo' src={Logo}></img>
       <div className='header-icon'
       onClick={active}
       >
       <FiMenu />
       </div>
       <ul className='header-menu'  ref={Open}>
       <a href='/'><li>Home</li></a>
       <a href='#program'><li>Programs</li></a>
       <a href='#reason'><li>Why us</li></a>
       <a href='#plan'><li>Plans</li></a>
       <a href='#Testimonials'><li>Testimonials</li></a>
       </ul>
    </div>
  )
}

export default Header