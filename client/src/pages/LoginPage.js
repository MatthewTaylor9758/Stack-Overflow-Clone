import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect, NavLink } from 'react-router-dom';
import '../loginPage.css';
import stackOverflowLogo from '../images/stackOverflowLogo.png';
import { fetchQuestions } from '../store/questions';
// import { production } from 'config/database.js'
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(process.env);
    e.preventDefault();
    dispatch(login(username, password));
    dispatch(fetchQuestions())
  }

  const DemoSignIn = (e) => {
    dispatch(login('Demo-lition', 'password'))
    dispatch(fetchQuestions())
  }
  if (isLoggedIn) {
    dispatch(fetchQuestions())
    return <Redirect to='/main-page' />
  }

  return (
    <div className='login-body'>
      <div className='container-login'>
        <div className='central-login'>
          <div className='logo'>
            <img src={stackOverflowLogo} />
          </div>
          <div className='third-party-logins'>
            - Third party buttons under construction -
            <div id='google' className='third-party-buttons'>Google</div>
            <div id='github' className='third-party-buttons'>GitHub</div>
            <div id='facebook' className='third-party-buttons'>Facebook</div>
          </div>
          <div className='login-page'>
            <form onSubmit={handleSubmit} className='login-form'>
              <label>
                Username
              </label>
              <input
                type='text'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label name='password' htmlFor='password'>
                Password
              </label>
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              <button type='submit' className='login-form-button'>Log In</button>
            </form>
            <button onClick={DemoSignIn} className='login-form-button'>Demo Login</button>
          </div>
          <div className='footer'>
            <p>
            Don't have an account? <NavLink to='/signup' className='nav-links'>Sign Up</NavLink>
            </p>
            <p>
              Employer link coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
