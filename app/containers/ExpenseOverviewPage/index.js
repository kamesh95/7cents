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
        </Container>
      </Grid>
    </Grid>
  );
}
