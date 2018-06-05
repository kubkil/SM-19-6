import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { thumbUp, thumbDown, editComment, removeComment } from '../actions/actions';


const mapDispatchToProps = dispatch => ({
  thumbUp: (id) => dispatch(thumbUp(id)),
  thumbDown: (id) => dispatch(thumbDown(id)),
  editComment: (id, text) => dispatch(editComment(id, text)),
  removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);