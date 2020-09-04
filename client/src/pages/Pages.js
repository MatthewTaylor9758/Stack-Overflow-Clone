import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import SignUpPage from './SignUpPage';

export default function Pages() {
  return (
    <>
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/profile' component={ProfilePage} />
      <Route exact path='/signup' component={SignUpPage} />
      <Route path='*' component={LoginPage} />
    </Switch>
    </>
  )
}
