import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { thumbUp } from '../actions/actions'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);