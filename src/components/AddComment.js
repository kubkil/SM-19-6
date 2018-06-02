import React from 'react';

const AddComment = ({text, addComment}) => {
  return (
    <form>
      <input type='text' placeholder='type comment' value={text}/>
      <button type='submit' onClick={() => addComment(text)}>Post</button>
    </form>
  )
}

export default AddComment;