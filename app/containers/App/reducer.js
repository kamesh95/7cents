/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_BALANCE_STATS,
  LOAD_BALANCE_STATS_SUCCESS,
  LOAD_BALANCE_STATS_ERROR,
  LOAD_BALANCE_HISTORY,
  LOAD_BALANCE_HISTORY_SUCCESS,
  LOAD_BALANCE_HISTORY_ERROR,
  LOAD_LAST_FIVE_TRANSACTIONS,
  LOAD_LAST_FIVE_TRANSACTIONS_SUCCESS,
  LOAD_LAST_FIVE_TRANSACTIONS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    id: 1,
    balanceStats: [],
    balanceHistory: [],
    lastFiveTransactions: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_BALANCE_STATS:
        draft.loading = true;
        draft.error = false;
        draft.userData.balanceStats = [];
        break;

      case LOAD_BALANCE_STATS_SUCCESS:
        draft.userData.balanceStats = action.balanceStats;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_BALANCE_STATS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_LAST_FIVE_TRANSACTIONS:
        draft.loading = true;
        draft.error = false;
        draft.userData.lastFiveTransactions = [];
        break;

      case LOAD_LAST_FIVE_TRANSACTIONS_SUCCESS:
        draft.userData.lastFiveTransactions = action.lastFiveTransactions;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_LAST_FIVE_TRANSACTIONS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_BALANCE_HISTORY:
        draft.loading = true;
        draft.error = false;
        draft.userData.balanceHistory = [];
        break;

      case LOAD_BALANCE_HISTORY_SUCCESS:
        draft.userData.balanceHistory = action.balanceHistory;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_BALANCE_HISTORY_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
