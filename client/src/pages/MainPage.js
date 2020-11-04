import React, { useState, useEffect } from 'react';
import codebackgrounddrip from '../images/codeBackgroundDrip.jpg';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchQuestions, getQuestions, deleteQuestion } from '../store/questions';
import '../mainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  // const [questionList, setQuestionList] = useState(dispatch(fetchQuestions))
  const username = useSelector(state => state.auth.username);
  const questions = useSelector(state => state.questions);

  // useEffect(() => {
  //   console.log('fucking work already');
  //   let res;
  //   (async function goGetQuestions() {
  //     res = await fetch('/api/questions');
  //     res.questions = await res.json();
  //     console.log(res.questions)
  //     dispatch(await getQuestions(res.questions.questions));
  //     console.log(res.questions)
  //     return res;
  //   })();
  //   console.log(res);
  // }, []);

  // useEffect(fetchQuestions)

  const toProfile = () => {
    window.location.href = './profile';
    dispatch(fetchQuestions())
  };

  const askQuestion = () => {
    window.location.href = './ask-question';
  };

  // const questions = useSelector(state => state.questions)
  const getQuestions = (e) => {
    dispatch(fetchQuestions())
  };

  const handleQuestionDelete = async (e) => {
    deleteQuestion(e.target.value);
  }

  return (
    <div className='container'>
      <div id='left-side-bar'>
        <p>Under Construction</p>
      </div>
      <div id='questions-area'>
        <div id='header'>
          <p>Top Questions</p>
          <button onClick={getQuestions}>Fetch Questions</button>
          <button onClick={toProfile}>Profile</button>
          <button onClick={askQuestion}>Ask Question</button>
        </div>
        {/* <ul id='questions'>
          {questions.length ? questions.map( question =>
            <li key={question.id}>{question.content} - {question.User.username}</li>) : null}
        </ul> */}
        {questions.length ? questions.map( question => {
          return <div className='question-div'>
                  <div className='score-div'>
                    <div className='score'>{question.score}</div>
                    <div className='vote-text'>Votes</div>
                  </div>
                  <div className='question-content-div'>
                    <div className='question-and-delete'>
                      <h3>{question.content}</h3>
                      {username === question.User.username ?
                        <button value={question.id} className='delete-button' onClick={handleQuestionDelete}>Delete</button>
                        :
                        <div>

                        </div>
                      }
                    </div>
                    <div className='question-details'>
                      <div className='tags'>Tags Coming Soon!</div>
                      <div className='username'>asked by {question.User.username}</div>
                    </div>
                  </div>
                 </div>
        }) : null}
      </div>
      <div id='right-side-bar'>
        <p>
          Under Construction
        </p>
      </div>
    </div>
  )
}

export default MainPage;
