import { ADD, DELETE } from '../constants/todos';

export const add = data => ({
  type: ADD,
  data
});

export const del = id => ({
  type: DELETE,
  id
});
