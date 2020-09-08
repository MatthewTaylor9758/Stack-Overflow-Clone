import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchQuestions } from '../store/questions';
import { Redirect } from 'react-router-dom';
import '../profilePage.css';
import stockStackOverflowProPic from '../images/stockStackOverflowProPic.png';

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
    <div id='container' className='profile-container'>
      <div id='left-side-bar' className='profile-left-bar'>
        <p>Under Construction</p>
      </div>
      {/* <h1>{`Hello ${username}! This is a working test!!!`}</h1> */}
      <div id='user-info-container'>
        <div id='user-info'>
          <div id='user-picture'>
            <img src={stockStackOverflowProPic} />
          </div>
          <div>
            <h2>{username}</h2>
            <div>Student at App Academy</div>
            <div>(Your about me is currently blank.)</div>
            <div>About me editing currently under construction.</div>
            <button onClick={toMainPage}>Main Page</button>
          </div>
        </div>
        <div id='user-helpful-links'>
          <h3>Helpful user links and answered questions coming soon!</h3>
        </div>
      </div>
      <div id='user-stats'>
        User Statistics Coming Soon!
      </div>
      {/* <button onClick={handleLogOut}>Log Out</button>
      <button onClick={toMainPage}>Main Page</button> */}
    </div>
  );
}

export default ProfilePage;
