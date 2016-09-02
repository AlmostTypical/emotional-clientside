import * as types from './types';
import axios from 'axios'

const actions = {};

actions.storeUser = function (user) {
  return {
    type: types.STORE_USER,
    user: user
  }
};

actions.requestedData = function () {
  return {
    type: types.REQUESTED_DATA
  }
};

actions.receivedData = function (payload) {
  return {
    type: types.RECEIVED_DATA,
    data: payload
  }
};

actions.receivedError = function (error) {
  return {
    type: types.RECEIVED_ERROR,
    data: error
  }
};

actions.dataRequest = function (url) {
  return function(dispatch) {
    console.log('requesting data');
    dispatch(actions.requestedData());
    return axios.get(url)
      .then(function(response) {
        console.log('received data');
        dispatch(actions.receivedData(response));
      })
      .catch(function(response) {
        console.log('received error');
        dispatch(actions.receivedError(response));
      })
  }
};

export default actions;

