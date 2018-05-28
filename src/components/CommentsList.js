import React from 'react';
import Comment from './Comment';
// spread?? ...comment = comment.votes comment.id  comment trafia z CommentsListContainer.js
const CommentsList = ({ comments }) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>;

export default CommentsList;