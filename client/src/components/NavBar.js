import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import hamburgerIconKinda from '../images/hamburgerIconKinda.png';
import stackOverflowImageWhite from '../images/stackOverflowIconWhite.png';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import Cookies from 'js-cookie';

function NavBar() {

  const handleLogIn = () => {
    window.location.href = './login';
  }

  const handleSignUp = () => {
    window.location.href = './signup';
  }

  const handleLogOut = async (e) => {
    const res = await fetch('/api/session', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      }
    });
    window.location.href = '/login';
  }

  return (
    <>
      <nav id='nav-bar'>
        <div>
          <img src={hamburgerIconKinda} className='nav-burger' />
        </div>
        <div>
          <img src={stackOverflowImageWhite} className='nav-logo' />
        </div>
        <div className='nav-bar-links'>
          Coming Soon!
        </div>
        <div className='nav-bar-links'>
          Coming Soon!
        </div>
        <div className='nav-bar-links'>
          Coming Soon!
        </div>
        <div id='search-bar'>
          Search-Bar Coming Soon!
        </div>
        <div>
          <button onClick={handleLogIn}>Log in</button>
          <button onClick={handleSignUp}>Sign up</button>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
