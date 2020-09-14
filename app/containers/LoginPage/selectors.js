/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = state => state.login || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectLogin,
    loginState => loginState.username,
  );

const makeSelectPassword = () =>
  createSelector(
    selectLogin,
    loginState => loginState.password,
  );

const makeSelectLoginDisabled = () =>
  createSelector(
    selectLogin,
    loginState => loginState.loginDisabled,
  );

export {
  selectLogin,
  makeSelectUsername,
  makeSelectPassword,
  makeSelectLoginDisabled,
};
