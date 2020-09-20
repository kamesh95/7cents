import styled from 'styled-components';
import TableContainer from '@material-ui/core/TableContainer';

export default styled(TableContainer)`
  padding: 10px;
  margin-top: 20px;
  max-width: 75%;

  ${props => props.theme.breakpoints.down('sm')} {
    max-width: 100%;
  }

  .MuiTable-root {
    min-width: 700px;
  }

  .MuiTableCell-head {
    font-weight: 700;
    border-bottom: none !important;
    color: black;
    font-size: 0.825rem;
  }

  .MuiTableCell-body {
    border-bottom: none !important;
    font-size: 0.75rem;
    line-height: 1.25;
    padding: 12px;
  }
`;
