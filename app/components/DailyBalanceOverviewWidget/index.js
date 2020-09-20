import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import Paper from './Paper';
import messages from './messages';
import WidgetTitle from '../WidgetTitle';
import Wrapper from './Wrapper';
import FilterButtonsLayout from './FilterButtonsLayout';

function DailyBalanceOverviewWidget(props) {
  let val;
  const handleChange = event => {
    val = event.target.value;
  };

  return (
    <Wrapper>
      <Paper elevation={0} theme={props.theme}>
        <WidgetTitle>
          <FormattedMessage {...messages.title} />
        </WidgetTitle>
        <ResponsiveBar
          data={props.data}
          keys={['expenses', 'revenues']}
          indexBy="dateTime"
          margin={{ top: 40, right: 100, bottom: 70, left: 60 }}
          padding={0.9}
          colors={{ scheme: 'pastel2' }}
          borderRadius={1}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Date',
            legendPosition: 'middle',
            legendOffset: 40,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Amount (₹)',
            legendPosition: 'middle',
            legendOffset: -50,
          }}
          enableGridY={false}
          enableLabel={false}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: 94,
              translateY: 90,
              itemWidth: 100,
              itemHeight: 20,
              itemsSpacing: 0,
              symbolSize: 20,
              itemDirection: 'left-to-right',
            },
          ]}
          animate
          motionStiffness={90}
          motionDamping={15}
        />
        <FilterButtonsLayout theme={props.theme}>
          <FormControl>
            <InputLabel shrink>
              <FormattedMessage {...messages.timeline} />
            </InputLabel>
            <NativeSelect
              value={val}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'age-native-label-placeholder',
              }}
            >
              <option value="Yearly">Yearly</option>
              <option value="Monthly">Monthly</option>
              <option value="Daily">Daily</option>
            </NativeSelect>
          </FormControl>
        </FilterButtonsLayout>
      </Paper>
    </Wrapper>
  );
}

DailyBalanceOverviewWidget.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default DailyBalanceOverviewWidget;
