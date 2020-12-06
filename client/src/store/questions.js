import Cookies from 'js-cookie';

const GET_QUESTIONS = 'questions/GET_QUESTIONS';

export const getQuestions = (questions) => {
  console.log(questions)
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export const fetchQuestions = () => {
  return async dispatch => {
    const res = await fetch('/api/questions');
    res.questions = await res.json();
    console.log(res.questions);
    dispatch(getQuestions(res.questions.questions));
    localStorage.setItem('questions', JSON.stringify(res.questions.questions))
    return res;
  }
}

export const askQuestion = async (userId, content, score) => {
  console.log(userId, content, score);
    const res = await fetch('/api/questions', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      },
      body: JSON.stringify({ userId, content, score })
    })
    res.data = res.json();
    return res.data;
}

export const deleteQuestion = async (questionId) => {
  console.log(questionId);
  const res = await fetch('/api/questions', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
    },
    body: JSON.stringify({ questionId })
  });
  console.log('hello')
  console.log(res);
  // res.data = await res.json();
  // dispatch(fetchQuestions())
  // console.log(res.data);
  // return res.data;
}

let questions = JSON.parse(localStorage.getItem('questions'))
const initialState = questions ? questions : {};

export default function questionsReducer(state=initialState, action) {
  // fetchQuestions();
  switch(action.type) {
    case GET_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}
