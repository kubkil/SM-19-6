import React from 'react';
import Comment from './Comment';
// spread??
const CommentsList = ({ comments }) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>;

export default CommentsList;