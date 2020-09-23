/*
 * Expense overview page
 *
 * Show overview of all expenses
 */
import React from 'react';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import SideDrawer from 'containers/SideDrawer';
import Container from './Container';
import BalanceStatWidget from '../../components/BalanceStatWidget';
import TransactionsWidget from '../../components/TransactionsWidget';
import DailyBalanceOverviewWidget from '../../components/DailyBalanceOverviewWidget';
import Flex from './Flex';
import IncomeExpenseWidget from '../../components/IncomeExpenseWidget';

const data = [
  {
    id: 'Spent',
    label: 'Spent',
    value: 390,
    color: 'hsl(318, 70%, 50%)',
  },
  {
    id: 'Remaining',
    label: 'Remaining',
    value: 180,
    color: 'hsl(94, 70%, 50%)',
  },
];

function createData(dateTime, paymentMethod, particulars, type, amount) {
  return { dateTime, paymentMethod, particulars, type, amount };
}

const transactionData = [
  createData(
    new Date().toLocaleString(),
    'Paypal',
    'Via Paypal to Kamesh for monthly work 8 hours.',
    'Credit',
    '₹114.0',
  ),
  createData(new Date().toLocaleString(), 'Credit Card', '', 'Debit', '₹4300'),
  createData(
    new Date().toLocaleString(),
    'Debit Card',
    'Groceries',
    'Credit',
    '₹60000',
  ),
  createData(
    new Date().toLocaleString(),
    'Net Banking',
    'Test Data',
    'Debit',
    '₹111',
  ),
];

const dailyBalanceData = [
  {
    dateTime: 'AD',
    expenses: 97,
    expensesColor: 'hsl(109, 70%, 50%)',
    revenues: 12,
    revenuesColor: 'hsl(26, 70%, 50%)',
  },
  {
    dateTime: 'AE',
    expenses: 81,
    revenues: 36,
  },
  {
    dateTime: 'AF',
    expenses: 147,
    revenues: 127,
  },
  {
    dateTime: 'AG',
    expenses: 61,
    revenues: 14,
  },
  {
    dateTime: 'AI',
    expenses: 1000,
    revenues: 93,
  },
  {
    dateTime: 'AL',
    expenses: 138,
    revenues: 132,
  },
  {
    dateTime: 'AM',
    expenses: 166,
    revenues: 5,
  },
];

const incomeExpenseData = {
  expense: '$22,789.99',
  income: '$6009.10',
};

export default function FeaturePage() {
  const muiTheme = useTheme();
  return (
    <Grid container direction="column">
      <Grid item>
        <SideDrawer />
      </Grid>
      <Grid item>
        <Container theme={muiTheme}>
          <Flex theme={muiTheme}>
            <BalanceStatWidget theme={muiTheme} data={data} />
            <DailyBalanceOverviewWidget
              theme={muiTheme}
              data={dailyBalanceData}
            />
          </Flex>
          <Flex theme={muiTheme}>
            <TransactionsWidget theme={muiTheme} data={transactionData} />
            <IncomeExpenseWidget theme={muiTheme} data={incomeExpenseData} />
          </Flex>
        </Container>
      </Grid>
    </Grid>
  );
}
