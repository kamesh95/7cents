import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export default styled(Grid)`
  margin-top: ${props => props.applymargintop && '20px'};
`;
