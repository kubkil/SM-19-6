import React from 'react';
import {connect} from 'react-redux';
import {addComment} from '../actions/actions';

const AddComment = ({dispatch}) => {
  let input;

  return (
    <form onSubmit={e => {
            e.preventDefault();
            dispatch(addComment(input.value));
            input.value ='';}}>
      <input type='text' ref={node => input = node} />
      <button type='submit'>POST</button>
    </form>
  );
}

export default connect()(AddComment);

// const AddComment = (props) => (
//   <form onSubmit={(e) => {
//     e.preventDefault();
//     props.onCommentSubmit();
//     }}>

//     <input type='text' placeholder='type comment' value={props.text} onChange={(e) => props.onComment(e.target.value)} />
//     {/* type potrzebne? */}
//     <button type='submit'>POST</button>
//   </form>
// )

// const AddComment = ({text, addComment}) => {
//   return (
//     <form>
//       <input type='text' placeholder='type comment' value={text}/>
//       <button type='submit' onClick={() => addComment({text})}>Post</button>
//     </form>
//   )
// }

// export default AddComment;