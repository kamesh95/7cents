import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export default styled(Grid)`
  min-width: 75%;
  text-align: center;
  font-size: 13px;
  color: grey;
  min-width: ${props => props.applyminwidth};
`;
