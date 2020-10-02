/**
 * Load Expense Overview related data
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  LOAD_BALANCE_STATS,
  LOAD_BALANCE_HISTORY,
  LOAD_LAST_FIVE_TRANSACTIONS,
} from 'containers/App/constants';
import { selectUserId } from 'containers/App/selectors';
import {
  balanceStatsLoaded,
  balanceStatsLoadError,
  lastFiveTransactionsLoaded,
  lastFiveTransactionsLoadError,
  balanceHistoryLoaded,
  balanceHistoryLoadError,
} from '../App/actions';

import { data, transactionData, dailyBalanceData } from './mockData';
/**
 * Balance Stats handler
 */
export function* loadBalanceStats() {
  const userId = yield select(selectUserId());
  try {
    const balanceStats = yield call(request, `/api/balance/stats/${userId}`);
    yield put(balanceStatsLoaded(balanceStats, userId));
  } catch (error) {
    yield put(balanceStatsLoadError(error));
  }
}

/**
 * Last 5 transactions handler
 */
export function* loadLastFiveTransactions() {
  const userId = yield select(selectUserId());
  try {
    const lastFiveTransactions = yield call(
      request,
      `/api/transactions/${userId}`,
    );
    yield put(lastFiveTransactionsLoaded(lastFiveTransactions, userId));
  } catch (error) {
    yield put(lastFiveTransactionsLoadError(error));
  }
}

/**
 * Balance History handler
 */
export function* loadBalanceHistory() {
  const userId = yield select(selectUserId());
  try {
    const balanceHistory = yield call(
      request,
      `/api/balance/history/${userId}`,
    );
    yield put(balanceHistoryLoaded(balanceHistory, userId));
  } catch (error) {
    yield put(balanceHistoryLoadError(error));
  }
}

export default function* expenseOverviewData() {
  yield takeLatest(LOAD_BALANCE_STATS, loadBalanceStats);
  yield takeLatest(LOAD_LAST_FIVE_TRANSACTIONS, loadLastFiveTransactions);
  yield takeLatest(LOAD_BALANCE_HISTORY, loadBalanceHistory);
}
