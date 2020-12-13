import Cookies from 'js-cookie';
import { getCurrQuestion } from './currentQuestion';

const GET_ANSWERS = 'answers/GET_ANSWERS';

export const getAnswers = (answers) => {
  return {
    type: GET_ANSWERS,
    answers
  }
}

export const fetchAnswers = (questionId) => {
  return async dispatch => {
    console.log(typeof(questionId))
    console.log('hello')
    const res = await fetch('/api/answers', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      },
      body: JSON.stringify({ questionId })
    });
    console.log(res);
    debugger
    res.answers = await res.json();
    console.log(res.answers);
    debugger
    dispatch(getAnswers(res.answers.answers))
    localStorage.setItem('answers', JSON.stringify(res.answers.answers))
    localStorage.setItem('currentQuestion', questionId)
    return res;
  }
}

let answers = JSON.parse(localStorage.getItem('answers'))
const initialState = answers ? answers : {};

export default function answersReducer(state=initialState, action) {
  switch(action.type) {
    case GET_ANSWERS:
      return action.answers;
    default:
      return state;
  }
}
