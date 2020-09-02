import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';

export default function Pages() {
  return (
    <>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/profile' component={ProfilePage} />
    </>
  )
}