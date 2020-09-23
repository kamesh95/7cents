import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import icon from '../../images/icon-512x512.png';
import WidgetTitle from '../WidgetTitle/index';
import messages from './messages';
import Paper from './Paper';
import HeadLabel from './HeadLabel';
import Label from './Label';
import Grid from './Grid';

function IncomeExpenseWidget(props) {
  return (
    <div>
      <Paper elevation={0} theme={props.theme}>
        <WidgetTitle>
          <FormattedMessage {...messages.title} />
        </WidgetTitle>
        <Grid applymargintop="true" container direction="row">
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <img
                  src={icon}
                  style={{ width: '42px', height: '42px', marginRight: '10px' }}
                  alt="Logo"
                />
              </Grid>
              <Grid item>
                <HeadLabel>{props.data.expense}</HeadLabel>
                <Label>
                  <FormattedMessage {...messages.expense} />
                </Label>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid applymargintop="true" container direction="row">
              <Grid item>
                <img
                  src={icon}
                  style={{ width: '42px', height: '42px', marginRight: '10px' }}
                  alt="Logo"
                />
              </Grid>
              <Grid item>
                <HeadLabel>{props.data.income}</HeadLabel>
                <Label>
                  <FormattedMessage {...messages.income} />
                </Label>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

IncomeExpenseWidget.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IncomeExpenseWidget;
