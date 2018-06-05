import React from 'react';
import '../css/App.css';
import CommentsListContainer from '../containers/CommentsListContainer';
import AddCommentContainer from '../containers/AddCommentContainer';
import DevTools from '../DevTools';

const App = () => {
  return (
    <div className='App'>
      <AddCommentContainer />
      <CommentsListContainer />
      <DevTools />
    </div>
  );
}

export default App;