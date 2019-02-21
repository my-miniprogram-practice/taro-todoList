//==============================================
// action types
//==============================================
// MUST have action types

// export const ADD = 'ADD';
// export const DELETE = 'DELETE';

export const types = {
  ADD: 'TODOS/ADD',
  DELETE: 'TODOS/DELETE'
};

//==============================================
// reducers
//==============================================

const INITIAL_STATE = [{ id: 0, text: 'The first todo.' }];

function todos(state = INITIAL_STATE, action) {
  // 获取当前todos条数，用以id自增
  let todoNum = state.length;
  state.forEach(item => {
    // 当删除了一条非数组末尾的todo时，重新生成的todo id会重复，这里处理避免出现重复id。
    if (item.id === todoNum) {
      todoNum++;
    }
  });
  switch (action.type) {
    case types.ADD:
      return [
        ...state,
        {
          id: todoNum,
          text: action.data
        }
      ];
    case types.DELETE:
      return [...state.filter(item => item.id !== action.id)];
    default:
      return state;
  }
}
// MUST export default a function called reducer()
export default todos;

//==============================================
// action creater
//==============================================

// export const add = data => ({
//   type: ADD,
//   data
// });

// export const del = id => ({
//   type: DELETE,
//   id
// });

// MUST export its action creators as functions
export const actions = {
  add: data => ({
    type: types.ADD,
    data
  }),
  del: id => ({
    type: types.DELETE,
    id
  })
};
