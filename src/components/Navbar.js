import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
// import { HashLink as Link} from 'react-router-hash-link';
import './Navbar.css';
import './Button.css';
// import {ReloadPage} from "../reloadpage";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          GTA <img src = 'images/gtalogo.jpg' alt='logo' className='img'></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/social' className='nav-links' onClick={closeMobileMenu}>
                Social
              </Link>
            </li>
            <li>
              <Link
                to='/customer/access/signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            {/* <li>
              <Link
                to='/customer/access/signin'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign-in
              </Link>
            </li>  */}
          </ul>
        {button && <Button
          to='/customer/access/signup'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        Login
        </Button>}
        {/* {button && <Button
          to='/customer/access/signin'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
        Sign-In 
        </Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
