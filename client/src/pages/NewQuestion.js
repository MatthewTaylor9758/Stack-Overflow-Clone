import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { askQuestion } from '../store/questions';

function NewQuestion() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const username = useSelector(state => state.auth.username);
  const userId = useSelector(state => state.auth.id);
  const score = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    askQuestion(userId, body, score);
    window.location.href = './login'; // should be './main-page'
  }

  return (
    <>
      <h1>This is just a placeholder</h1>
      <h1>This is just another placeholder</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <textarea
          name='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Tags</label>
        <input
          type='text'
          name='tags'
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button type='submit'>Submit Question</button>
      </form>
    </>
  )
}

export default NewQuestion;
