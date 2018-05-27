import { connect } from 'react-redux';
import CommentsList from '../components/CommentsList';

const mapStateToProps = state => ({
  comments: state.comments
});
/* wywołujemy funkcję connect, która zwraca funkcję. Następnie, wywołanie tej funkcji dopiero podpina się pod komponent CommentsList. ??? */
export default connect(mapStateToProps)(CommentsList);