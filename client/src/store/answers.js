import Cookies from 'js-cookie';

const GET_ANSWERS = 'answers/GET_ANSWERS';

export const getAnswers = (answers) => {
  return {
    type: GET_ANSWERS,
    answers
  }
}

export const fetchAnswers = () => {
  return async dispatch => {
    console.log('hello')
    const res = await fetch('/api/answers');
    console.log(res);
    debugger
    const data = await res.json();
    console.log(data);
    debugger
    dispatch(getAnswers(data.answers))
    localStorage.setItem('answers', JSON.stringify(data.answers))
    return data;
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
