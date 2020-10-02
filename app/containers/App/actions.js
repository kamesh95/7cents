/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_BALANCE_STATS,
  LOAD_BALANCE_STATS_SUCCESS,
  LOAD_BALANCE_STATS_ERROR,
  LOAD_LAST_FIVE_TRANSACTIONS,
  LOAD_LAST_FIVE_TRANSACTIONS_SUCCESS,
  LOAD_LAST_FIVE_TRANSACTIONS_ERROR,
  LOAD_BALANCE_HISTORY,
  LOAD_BALANCE_HISTORY_SUCCESS,
  LOAD_BALANCE_HISTORY_ERROR,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from './constants';

/**
 * Load the Balance Stats, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_BALANCE_STATS
 */
export function loadBalanceStats() {
  return {
    type: LOAD_BALANCE_STATS,
  };
}

/**
 * Load the Last 5 transactions, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_LAST_FIVE_TRANSACTIONS
 */
export function loadLastFiveTransactions() {
  return {
    type: LOAD_LAST_FIVE_TRANSACTIONS,
  };
}

/**
 * Load the balance history, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_BALANCE_HISTORY
 */
export function loadBalanceHistory() {
  return {
    type: LOAD_BALANCE_HISTORY,
  };
}

/**
 * Login user
 *
 * @return {object} An action object with a type of LOGIN
 */
export function login() {
  return {
    type: LOGIN,
  };
}

/**
 * Dispatched when the user login is successfull
 *
 * @return {object} An action object with a type of LOGIN_SUCCESS
 */
export function loginSuccess(username) {
  return {
    type: LOGIN_SUCCESS,
    username,
  };
}

/**
 * Dispatched when the user login fails
 *
 * @return {object} An action object with a type of LOGIN_ERROR
 */
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

/**
 * Dispatched when the balance stats are loaded by the request saga
 *
 * @param  {array} balanceStats The balance stats
 * @param  {string} userId The current userId
 *
 * @return {object} An action object with a type of LOAD_BALANCE_STATS_SUCCESS passing the balance stats
 */
export function balanceStatsLoaded(balanceStats, userId) {
  return {
    type: LOAD_BALANCE_STATS_SUCCESS,
    balanceStats,
    userId,
  };
}

/**
 * Dispatched when loading the balance stats fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_BALANCE_STATS_ERROR passing the error
 */
export function balanceStatsLoadError(error) {
  return {
    type: LOAD_BALANCE_STATS_ERROR,
    error,
  };
}

/**
 * Dispatched when the last 5 transactions are loaded by the request saga
 *
 * @param  {array} lastFiveTransactions The last 5 transactions
 * @param  {string} userId The current userId
 *
 * @return {object} An action object with a type of LOAD_LAST_FIVE_TRANSACTIONS_SUCCESS passing the lastFiveTransactions
 */
export function lastFiveTransactionsLoaded(lastFiveTransactions, userId) {
  return {
    type: LOAD_LAST_FIVE_TRANSACTIONS_SUCCESS,
    lastFiveTransactions,
    userId,
  };
}

/**
 * Dispatched when loading the last 5 transactions fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_LAST_FIVE_TRANSACTIONS_ERROR passing the error
 */
export function lastFiveTransactionsLoadError(error) {
  return {
    type: LOAD_LAST_FIVE_TRANSACTIONS_ERROR,
    error,
  };
}

/**
 * Dispatched when the balance history is loaded by the request saga
 *
 * @param  {array} balanceHistory The balance history
 * @param  {string} userId The current userId
 *
 * @return {object} An action object with a type of LOAD_BALANCE_HISTORY_SUCCESS passing the balanceHistory
 */
export function balanceHistoryLoaded(balanceHistory, userId) {
  return {
    type: LOAD_BALANCE_HISTORY_SUCCESS,
    balanceHistory,
    userId,
  };
}

/**
 * Dispatched when loading the balance history fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_BALANCE_HISTORY_ERROR passing the error
 */
export function balanceHistoryLoadError(error) {
  return {
    type: LOAD_BALANCE_HISTORY_ERROR,
    error,
  };
}
