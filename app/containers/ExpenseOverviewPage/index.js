/*
 * Expense overview page
 *
 * Show overview of all expenses
 */
import React, { useEffect, memo } from 'react';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import SideDrawer from 'containers/SideDrawer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectBalanceStats,
  makeSelectBalanceHistory,
  makeSelectLastFiveTransactions,
} from 'containers/App/selectors';

import Flex from './Flex';
import saga from './saga';
import Container from './Container';
import BalanceStatWidget from '../../components/BalanceStatWidget';
import TransactionsWidget from '../../components/TransactionsWidget';
import DailyBalanceOverviewWidget from '../../components/DailyBalanceOverviewWidget';
import IncomeExpenseWidget from '../../components/IncomeExpenseWidget';
import {
  loadBalanceStats,
  loadBalanceHistory,
  loadLastFiveTransactions,
} from '../App/actions';

const incomeExpenseData = {
  expense: '$22,789.99',
  income: '$6009.10',
};

const key = 'expense_overview';

export function ExpenseOverviewPage({
  balanceStats,
  balanceHistory,
  lastFiveTransactions,
  onLoadBalanceStats,
  onLoadBalanceHistory,
  onLoadLastFiveTransactions,
}) {
  const muiTheme = useTheme();
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoadBalanceStats();
    onLoadLastFiveTransactions();
    onLoadBalanceHistory();
  }, []);

  return (
    <Grid container direction="column">
      <Grid item>
        <SideDrawer />
      </Grid>
      <Grid item>
        <Container theme={muiTheme}>
          <Flex theme={muiTheme}>
            <BalanceStatWidget theme={muiTheme} data={balanceStats} />
            <DailyBalanceOverviewWidget
              theme={muiTheme}
              data={balanceHistory}
            />
          </Flex>
          <Flex theme={muiTheme}>
            <TransactionsWidget theme={muiTheme} data={lastFiveTransactions} />
            <IncomeExpenseWidget theme={muiTheme} data={incomeExpenseData} />
          </Flex>
        </Container>
      </Grid>
    </Grid>
  );
}

ExpenseOverviewPage.propTypes = {
  balanceStats: PropTypes.array,
  balanceHistory: PropTypes.array,
  lastFiveTransactions: PropTypes.array,
  onLoadBalanceStats: PropTypes.func.isRequired,
  onLoadBalanceHistory: PropTypes.func.isRequired,
  onLoadLastFiveTransactions: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  balanceStats: makeSelectBalanceStats(),
  balanceHistory: makeSelectBalanceHistory(),
  lastFiveTransactions: makeSelectLastFiveTransactions(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadBalanceStats: () => dispatch(loadBalanceStats()),
    onLoadBalanceHistory: () => dispatch(loadBalanceHistory()),
    onLoadLastFiveTransactions: () => dispatch(loadLastFiveTransactions()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ExpenseOverviewPage);
