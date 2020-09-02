import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  }

  const DemoSignIn = (e) => {
    dispatch(login('Demo-lition', 'password'))
  }

  if (isLoggedIn) return <Redirect to='/profile' />

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username
        <input
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit'>Log In</button>
      </form>
      <button onClick={DemoSignIn}>Demo Login</button>
    </>
  );
}

export default LoginPage;
