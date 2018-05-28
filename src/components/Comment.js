import React from 'react';

const Comment = ({ text, votes, thumbUp, id }) => <li>{text} <span>votes: {votes}</span> <span onClick={() => thumbUp(id)}>X</span></li>;

export default Comment;