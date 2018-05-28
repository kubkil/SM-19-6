import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { thumbUp } from '../actions/actions'

console.log(thumbUp);
const mapDispatchToProps = dispatch => ({
  thumbUp: (id) => dispatch(thumbUp(id))
});

export default connect(null, mapDispatchToProps)(Comment);