import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useTheme } from '@material-ui/core/styles';

import WidgetTitle from '../WidgetTitle';
import TableContainer from './TableContainer';
import icon from '../../images/icon-512x512.png';

function TransactionsWidget(props) {
  const muiTheme = useTheme();
  const rows = props.data;

  return (
    <TableContainer theme={muiTheme} component={Paper} elevation={5}>
      <WidgetTitle> Transactions </WidgetTitle>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date and Time</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Particulars</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.dateTime}>
              <TableCell component="th" scope="row">
                {row.dateTime}
              </TableCell>
              <TableCell>
                <img
                  src={icon}
                  style={{ width: '18px', height: '18px', marginRight: '5px' }}
                  alt="Logo"
                />
                {row.paymentMethod}
              </TableCell>
              <TableCell>{row.particulars}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TransactionsWidget.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TransactionsWidget;
