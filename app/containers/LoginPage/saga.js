/**
 * Login user into the system
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN } from 'containers/App/constants';

import request from 'utils/request';
import { loginSuccess, loginError } from 'containers/App/actions';

import {
  makeSelectUsername,
  makeSelectPassword,
} from 'containers/LoginPage/selectors';

/**
 * Login handler
 */
export function* authorize() {
  try {
    const username = yield select(makeSelectUsername());
    const password = yield select(makeSelectPassword());

    yield call(request, '/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    });
    yield put(loginSuccess);
  } catch (error) {
    yield put(loginError(error));
  }
}

export default function* login() {
  yield takeLatest(LOGIN, authorize);
}
