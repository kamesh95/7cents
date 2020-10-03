import React from 'react';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SideDrawer from 'containers/SideDrawer';
import { tableIcons } from './MaterialTableIcons';
import MaterialTable from './MaterialTable';
import Container from './Container';

export default function TransactionsPage() {
  const muiTheme = useTheme();
  const columns = [
    {
      title: 'Date and Time',
      field: 'dateTime',
      type: 'datetime',
      width: 125,
      headerStyle: { textAlign: 'center' },
    },
    {
      title: 'Payment Method',
      field: 'paymentMethod',
      width: 100,
      headerStyle: { textAlign: 'center', width: 'calc(100% - 10px) / 5' },
    },
    {
      title: 'Particulars',
      field: 'particulars',
      width: 150,
      headerStyle: { textAlign: 'left', width: 'calc(100% - 10px) / 5' },
    },
    {
      title: 'Type',
      field: 'type',
      width: 70,
      lookup: { credit: 'Credit', debit: 'Debit' },
      headerStyle: { textAlign: 'left', width: 'calc(100% - 10px) / 5' },
      cellStyle: { minWidth: '100px' },
    },
    {
      title: 'Amount',
      field: 'amount',
      width: 100,
      type: 'numeric',
      headerStyle: { textAlign: 'left', width: 'calc(100% - 10px) / 5' },
    },
  ];

  const [state, setState] = React.useState({
    columns,
    data: [],
  });

  return (
    <Grid container direction="column">
      <Grid item>
        <SideDrawer />
      </Grid>
      <Grid item>
        <Container theme={muiTheme}>
          <MaterialTable
            style={{ wordBreak: 'normal' }}
            icons={tableIcons}
            title="Transactions"
            columns={state.columns}
            data={state.data}
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    setState(prevState => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setState(prevState => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    setState(prevState => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
          />
        </Container>
      </Grid>
    </Grid>
  );
}
