import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions, deleteQuestion } from '../store/questions';
import '../answerPage.css';
import { fetchAnswers } from '../store/answers';

// const displayQuestion = JSON.parse(localStorage.getItem('currentQuestion'));

function AnswerPage() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);
  const questions = useSelector(state => state.questions);
  const answers = useSelector(state => state.answers);
  const displayQuestion = useSelector(state => state.answers[0].content);

  // useEffect(() => {
  //   console.log('testing')
  //   dispatch(fetchQuestions());
  // }, [dispatch])

  // useEffect(() => {
  //   dispatch(fetchQuestions())
  // }, [questions])

  const toProfile = () => {
    window.location.href = './profile';
    dispatch(fetchQuestions())
  };

  const askQuestion = () => {
    window.location.href = './ask-question';
  };

  // const questions = useSelector(state => state.questions)
  const getAnswers = (e) => {
    dispatch(fetchAnswers())
  };

  const handleAnswerDelete = async (e) => {
    const res = await deleteQuestion(e.target.value);
    console.log(res);
    getAnswers()
  }

  return (
    <div className='container'>
      <div id='left-side-bar'>
        <p>Under Construction</p>
      </div>
      <div id='answers-area'>
        <div id='header'>
          <div>
            <button onClick={toProfile}>Profile</button>
          </div>
        </div>
        <div>
          {displayQuestion}
        </div>
        {answers.length ? answers.slice(1).map( answer => {
          return <div className='question-div'>
                  <div className='score-div'>
                    <div className='score'>{answer.score}</div>
                    <div className='vote-text'>Votes</div>
                  </div>
                  <div className='question-content-div'>
                    <div className='question-and-delete'>
                      <h3>{answer.content}</h3>
                      <p>{answer.User.username}</p>
                      {/* username === answer.User.username */}
                      { username === answer.User.username ?
                        <button value={answer.id} className='delete-button' onClick={handleAnswerDelete}>Delete</button>
                        :
                        <div>

                        </div>
                      }
                    </div>
                    <div className='question-details'>
                      <div className='tags'>Tags Coming Soon!</div>
                      <div className='username'>answered by {answer.User.username}</div>
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

export default AnswerPage;
