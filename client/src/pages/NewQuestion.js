import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { askQuestion } from '../store/questions';
import '../newQuestionPage.css'
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
      <div id='container' className='new-question'>
        <div id='form-container'>
          <form onSubmit={handleSubmit} id='ask-question-form'>
            <label>Title</label>
            <p className='label-descriptions'>Be specific and imagine you're asking a question to another person</p>
            <input
              type='text'
              name='title'
              value={title}
              placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Body</label>
            <p className='label-descriptions'>Include all the information someone would need to answer your question</p>
            <textarea
              name='body'
              value={body}
              cols={110}
              rows={15}
              onChange={(e) => setBody(e.target.value)}
            />
            <label>Tags</label>
            <p className='label-descriptions'>Add up to 5 tags to describe what your question is about</p>
            <input
              type='text'
              name='tags'
              value={tags}
              placeholder='e.g. (python-3.c pandas android)'
              onChange={(e) => setTags(e.target.value)}
            />
            <button type='submit' className='submit-question'>Submit Question</button>
          </form>
        </div>
        <div id='steps-div'>
          <div id='step-one'>
            <div id='step-one-title' className='title'>
              Step 1: Draft your question
            </div>
            <div>
              <p>The community is here to help you with specific coding, algorithm, or language problems. Avoid asking opinion-based questions.</p>
              <h4><span className='nums'>1.</span> Summarize the problem</h4>
              <h4><span className='nums'>2.</span> Describe what you've tried</h4>
              <h4 id='last-h4'><span className='nums'>3.</span> Show some code</h4>
            </div>

          </div>
          <div id='step-two'>
            <p>Have a non-programming question?</p>
          </div>
          <div id='step-three'>
            <p>More helpful Links coming soon.</p>
          </div>
        </div>
      </div>
  )
}

export default NewQuestion;
