import {
  ADD_COMMENT,
  EDIT_COMMENT,
  REMOVE_COMMENT,
  THUMB_UP,
  THUMB_DOWN
} from '../actions/actions';

// https://redux.js.org/basics/example-todo-list export?
export const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      console.log(action);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          votes: 0
        }
      ]

    case EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          return { ...comment, text: action.text }
        }
        return comment;
      });

    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id)

    case THUMB_UP:
      return state.map(comment => {
        if (comment.id === action.id) {
          return { ...comment, votes: comment.votes + 1 }
        }
        return comment;
      });

    case THUMB_DOWN:
      return state.map(comment => {
        if (comment.id === action.id) {
          return { ...comment, votes: comment.votes - 1 }
        }
        return comment;
      });

    default:
      return state;
  }
}