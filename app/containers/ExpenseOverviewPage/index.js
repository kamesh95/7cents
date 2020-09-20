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
    'Via Paypal',
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
  createData(new Date().toLocaleString(), 'UPI', 'Google Pay', 'Debit', '₹3.9'),
];

export default function FeaturePage() {
  const muiTheme = useTheme();
  return (
    <Grid container direction="column">
      <Grid item>
        <SideDrawer />
      </Grid>
      <Grid item>
        <Container theme={muiTheme}>
          <BalanceStatWidget theme={muiTheme} data={data} />
          <TransactionsWidget data={transactionData} />
        </Container>
      </Grid>
    </Grid>
  );
}
