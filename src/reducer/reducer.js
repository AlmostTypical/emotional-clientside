import * as types from '../actions/types';

let originalState = {
  data: {},
  user: '',
  isLoading: false,
  error: false
};

const reducer = function (initialState, action) {
  initialState = initialState || originalState;
  let newState;
  switch(action.type) {
    case types.STORE_USER:
      newState = Object.assign({}, initialState, {
        user: action.user
      });
      break;
    case types.REQUESTED_DATA:
      newState = Object.assign({}, initialState, {
        isLoading: true,
        error: false
      });
      console.log(newState);
      break;
    case types.RECEIVED_DATA:
      newState = Object.assign({}, initialState, {
        isLoading: false,
        error: false,
        data: action.data
      });
      console.log(newState);
      break;
    case types.RECEIVED_ERROR:
      newState = Object.assign({}, initialState, {
        isLoading: false,
        error: true,
        data: action.data
      });
      break;
    default:
      newState = initialState
  }
  return newState
};

export default reducer;