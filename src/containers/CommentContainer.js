import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { thumbUp } from '../actions/actions';
import { thumbDown } from '../actions/actions';


const mapDispatchToProps = dispatch => ({
  thumbUp: (id) => dispatch(thumbUp(id)),
  thumbDown: (id) => dispatch(thumbDown(id))
});

export default connect(null, mapDispatchToProps)(Comment);