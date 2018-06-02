import React from 'react';

const Comment = ({ text, votes, thumbUp, thumbDown, id }) => 
<li className='list-item'>
  {text} <span>votes: {votes}</span>
  <i className='fas fa-thumbs-up thumb' onClick={() => thumbUp(id)}></i>
  <i className='fas fa-thumbs-down thumb' onClick={() => thumbDown(id)}></i>
</li>;

export default Comment;