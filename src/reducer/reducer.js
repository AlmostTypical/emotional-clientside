import * as types from '../actions/types';

let originalState = {
  data: {},
  user: ''
};

const reducer = function (initialState, action) {
  initialState = initialState || originalState;
  let newState;
  switch(action.type) {
    case types.GET_DATA:
      axios.get('http://localhost:9002/api/dummy')
        .then(function (response) {
          newState = Object.assign({}, initialState, {
            data: response
          });
        })
        .catch(function (error) {
          alert(error);

        });
      break;
    default:
      newState = initialState
  }
  return newState
};

export default reducer;