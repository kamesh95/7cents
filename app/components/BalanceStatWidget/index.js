import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';

import WidgetTitle from '../WidgetTitle/index';
import messages from './messages';
import DonutText from './DonutText';
import FilledCircle from './FilledCircle';
import Paper from './Paper';

function BalanceStatWidget(props) {
  return (
    <div>
      <Paper elevation={5} theme={props.theme}>
        <WidgetTitle>
          <FormattedMessage {...messages.balanceStat} />
        </WidgetTitle>
        <ResponsivePie
          data={props.data}
          margin={{ top: -50, right: 20, bottom: 0, left: 20 }}
          innerRadius={0.7}
          cornerRadius={45}
          colors={{ scheme: 'pastel2' }}
          borderWidth={0}
          enableRadialLabels={false}
          radialLabelsSkipAngle={3}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#ffffff"
          radialLabelsLinkOffset={-13}
          radialLabelsLinkDiagonalLength={5}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor="#ffffff"
          enableSlicesLabels={false}
          slicesLabelsSkipAngle={17}
          slicesLabelsTextColor="#333333"
          animate
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              translateY: -30,
              symbolSize: 18,
              symbolShape: 'circle',
            },
          ]}
        />
        <DonutText theme={props.theme}>
          <span>₹200,000</span>
          <span style={{ fontSize: 12, color: '#1876D1' }}>
            <FormattedMessage {...messages.spent} />
          </span>
        </DonutText>
        <FilledCircle theme={props.theme}>.</FilledCircle>
      </Paper>
    </div>
  );
}

BalanceStatWidget.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default BalanceStatWidget;
