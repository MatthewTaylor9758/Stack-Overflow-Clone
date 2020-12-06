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
    const res = await fetch('/api/answers');
    const data = res.json();
    console.log(data);
    dispatch(getAnswers(data.answers))
    return data;
  }
}

export default function answersReducer(state={}, action) {
  switch(action.type) {
    case GET_ANSWERS:
      return action.answers;
    default:
      return state;
  }
}
