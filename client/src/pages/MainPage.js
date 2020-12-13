import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions, deleteQuestion } from '../store/questions';
import { fetchAnswers } from '../store/answers';
import '../mainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  // const [questionList, setQuestionList] = useState(dispatch(fetchQuestions))
  const username = useSelector(state => state.auth.username);
  const questions = useSelector(state => state.questions);

  // useEffect(() => {
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

  const getAnswers = async (e) => {
    console.log(e.target)
    const res = await dispatch(fetchAnswers(e.target.value));
    console.log(res)
    window.location.href = './answers';
    debugger;
  }

  return (
    <div className='container'>
      <div id='left-side-bar'>
        <p>Under Construction</p>
      </div>
      <div id='questions-area'>
        <div id='header'>
          <p>Top Questions</p>
          {/* <button onClick={getQuestions}>Fetch Questions</button> */}
          <div>
            <button onClick={toProfile}>Profile</button>
          </div>
          <div id='askQuestionButton'>
            <button onClick={askQuestion}>Ask Question</button>
          </div>
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
                      {/* href='./answers' */}
                        <button className='question-button' value={question.id} onClick={getAnswers}>
                                {question.content}
                        </button>
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
