/*
 * LoginReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USERNAME, CHANGE_PASSWORD } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  password: '',
  loginDisabled: true,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;
    }

    if (draft.username && draft.password) draft.loginDisabled = false;
    else draft.loginDisabled = true;
  });

export default loginReducer;
