import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, login } from '../store/auth';
import stackOverflowLogo from '../images/stackOverflowLogo.png';
import '../signUpPage.css';
function SignUpPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, password)
    await signup(username, email, password, confirmPassword);
    // dispatch(login(username, password));
    window.location.href = '/profile';
  }

  return (
    <div id='sign-up-container'>
      <div id='sign-up-feature-list'>
        <h1>Join the Stack Overflow community</h1>
        <div>Get unstuck — ask a question</div>
        <div>Unlock new privileges like voting and commenting</div>
        <div>Save your favorite tags, filters, and jobs</div>
        <div>Earn reputation and badges</div>
        <div id='small-text-feature'>
          <p>Use the power of Stack Overflow inside your organization.</p>
          <p>Free Trial link coming soon!</p>
        </div>
      </div>
      <div className='sign-up-body'>
        <div className='central-sign-up'>
          <div className='logo'>
            <img src={stackOverflowLogo} />
          </div>
          <div className='third-party-logins'>
            - Third party buttons under construction -
            <div id='google' className='third-party-buttons'>Google</div>
            <div id='github' className='third-party-buttons'>GitHub</div>
            <div id='facebook' className='third-party-buttons'>Facebook</div>
          </div>
          <div className='sign-up-page-container'>
            <form onSubmit={handleSubmit} className='sign-up-form'>
            <label>
                Username:
            </label>
            <input
              type='text'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
              <label>
                Email:
              </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>
                Password:
              </label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>
                Confirm Password:
              </label>
              <input
                type='password'
                name='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type='submit' className='sign-up-form-button'>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;
