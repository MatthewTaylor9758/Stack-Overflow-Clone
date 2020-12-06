import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions, deleteQuestion } from '../store/questions';
import '../answerPage.css';

function AnswerPage() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);
  const questions = useSelector(state => state.questions);

  useEffect(() => {
    console.log('testing')
    dispatch(fetchQuestions());
  }, [dispatch])

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
  const getQuestions = (e) => {
    dispatch(fetchQuestions())
  };

  const handleQuestionDelete = async (e) => {
    const res = await deleteQuestion(e.target.value);
    console.log(res);
    getQuestions()
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

export default AnswerPage;
