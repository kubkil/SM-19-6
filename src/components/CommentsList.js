import React from 'react';
import Comment from './Comment';
import CommentContainer from '../containers/CommentContainer';
// ...comment = comment.votes comment.id  comment trafia z CommentsListContainer.js
const CommentsList = ({ comments }) => 
  <ul>
    {comments.map(comment => <CommentContainer key={comment.id} {...comment} />)}
  </ul>;

export default CommentsList;