import * as types from './types';

const actions = {};

actions.getData = function (user) {
  return {
    type: types.GET_DATA,
    user: user
  }
};

