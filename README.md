# Stack Overflow
*By Matt Taylor*
## Table of Contents 
- [Stack Overflow Overview](#stack-overflow-overview)
- [Application Architecture and Technologies Involved](#application-architecture)
- [Front End Overview](#front-end-overview)
- [Back End Overview](#back-end-overview)
- [Moving Forward](#moving-forward)
## Stack Overflow Overview
Stack Overflow is based on the real web-based Stack Overflow site, focused on helping people with technical questions, solving developer and engineering issues, and of course, helping people by answering their questions!
</br>
</br>
The front end was built using HTML, CSS, React, and Redux, while the back end was developed using Express.js, Sequelize.js and PostgreSQL.
</br>
</br>
Users can view the main page with all the questions they and other users have asked, view their personal profile page, ask a new question to be added to the list of questions, and if you are the one who asked a question you can delete that question from the database.
</br>
</br>
![](https://media.giphy.com/media/HO9eBBnB6yCF0nhJnY/giphy.gif)
</br>
</br>
## Application Architecture
Placeholder for diagram that will show technologies and how they interact with each other.
</br>
</br>
## Front End Overview
### React
React components are used throughout the site to provide a seamless UX, whether that be navigating from your team page to the available players page, selecting the position of the players you want to look at, dropping and adding players etc.</br>
</br>
### Redux
Redux, react-redux, and redux-thunk are the foundation that manage the application's state, and provide requests and responses between the React front end and the Sequelize and Express based back end.
</br>
</br>
In most instances, the front end will react to a change the user makes and send that change to Redux. From there Redux will update its store and then send that information to the server. Since the Redux store has the information on the change that was made, the Redux store will persist the data between refreshes just as designed.
</br>
```
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
    window.location.href = './login'; 
  }

  return (
    <div id='outer-container'>
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
            <button type='submit' id='submitQuestion' className='submit-question'>Submit Question</button>
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
    </div>
  )
}
```
The code above is a basic React component that in this case happens to be the one that creates a new question. In it you can see the normal JSX you would see in almost any React component, along with the use of some React hooks. Also seen is a method called "askQuestion" that when triggered will hit the necessary API endpoint on the server and then make the change to the redux store so the new question will persist between refreshes.
</br>
</br>
## Back End Overview
### Sequelize ORM
I decided to use the Sequelize.js library for its ease of use when creating models, migrations and seeder files. Sequelize helped streamline my interactions with the database in all facets.
</br>
### PostgreSQL
I leveraged PostgreSQL's ability to use different transactions, foreign keys, subqueries, triggers, and different user-defined types and functions to create my site. Flask, SQLAlchemy and PostgreSQL work together to make my database construction, alterations, and interactions smoother.
</br>
### Express.js
I went with Express for its ease of use, and its ability to serve as a more than capable middleware to interact between my React and Redux based front end, and my Sequelize and Postgres back end.
</br>
## Moving Forward
What I would like to do next is add an answers feature so users could go and answer questions that they feel they can help on. The next thing I would love to do would be to add a lot of helpful links to all of the pages on the site, and that includes making the profile page a lot more robust and detailed than it is currently.

### Thank You

I sincerely apprectiate the time you have taken out of your day to read this far and parse through the site I had a ton of fun making! Creating this site from the ground up was a very rewarding experience and I cannot wait to work on it in the future!

### Credits:

<ul>
  <li>Gifs: Giphy.com</li>
  <li>Architecture Diagram is courtesy of</li> 
</ul>
