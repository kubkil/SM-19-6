import React from 'react';

const Comment = ({ text, votes, thumbUp, thumbDown, removeComment, editComment, id }) =>
<li className='list-item'>
  {text} <span>votes: {votes}</span>
  <i className='fas fa-thumbs-up thumb-icon' onClick={() => thumbUp(id)}></i>
  <i className='fas fa-thumbs-down thumb-icon' onClick={() => thumbDown(id)}></i>
  <i className="fas fa-trash remove-icon" onClick={() => removeComment(id)}></i>
  <i className="fas fa-edit edit-icon" onClick={() => editComment(id, prompt('text'))}></i>
</li>;

export default Comment;