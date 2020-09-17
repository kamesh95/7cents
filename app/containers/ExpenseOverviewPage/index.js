/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import SideDrawer from 'containers/SideDrawer';
import Container from './Container';

export default function FeaturePage() {
  const muiTheme = useTheme();
  return (
    <Grid container direction="column">
      <Grid item>
        <SideDrawer />
      </Grid>
      <Grid item>
        <Container theme={muiTheme}>Hey</Container>
      </Grid>
    </Grid>
  );
}
