import Cookies from 'js-cookie';

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
    const res = await fetch('/api/answers');
    console.log(res);
    debugger
    res.answers = await res.json();
    console.log(res.answers);
    debugger
    dispatch(getAnswers(res.answers.answers))
    localStorage.setItem('answers', JSON.stringify(res.answers.answers))
    localStorage.setItem('currentQuestion', questionId.toString())
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
