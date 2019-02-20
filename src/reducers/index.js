import { combineReducers } from 'redux';
import { ADD, DELETE } from '../constants/todos';

const INITIAL_STATE = {
  todos: [{ id: 0, text: 'The first todo.' }]
};

function todos(state = INITIAL_STATE, action) {
  // 获取当前todos条数，用以id自增
  const todoNum = state.todos.length;

  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: state.todos.concat({
          id: todoNum,
          text: action.data
        })
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
}

export default combineReducers({ todos });
