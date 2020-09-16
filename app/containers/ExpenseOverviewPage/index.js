/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Grid } from '@material-ui/core';
import SideDrawer from 'containers/SideDrawer';
import Container from './Container';

export default function FeaturePage() {
  return (
    <Grid container direction="column">
      <Grid item>
        <SideDrawer />
      </Grid>
      <Grid item>
        <Container />
      </Grid>
    </Grid>
  );
}
