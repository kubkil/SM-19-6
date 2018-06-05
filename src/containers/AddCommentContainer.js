import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { addComment } from '../actions/actions';
import AddComment from '../components/AddComment';

// statetoprops/ dispatchtoprops?
const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(AddComment);