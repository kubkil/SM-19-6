import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { addComment } from '../actions/actions';


const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(Comment);