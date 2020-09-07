import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchQuestions } from '../store/questions';
import { Redirect } from 'react-router-dom';

function ProfilePage() {
  const username = useSelector(state => state.auth.username);
  const dispatch = useDispatch();
  console.log(username)
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

  const toMainPage = () => {
    window.location.href = './login'; // should be './main-page'
    dispatch(fetchQuestions());
  }

  return (
    <>
      <h1>{`Hello ${username}! This is a working test!!!`}</h1>
      <button onClick={handleLogOut}>Log Out</button>
      <button onClick={toMainPage}>Main Page</button>
    </>
  );
}

export default ProfilePage;
// To delete a cookie, use the clearCookie function. For example, if you need to clear a cookie named foo, use the following code.

// var express = require('express');
// var app = express();

// app.get('/clear_cookie_foo', function(req, res){
//    res.clearCookie('foo');
//    res.send('cookie foo cleared');
// });

// app.listen(3000);
