import styled from 'styled-components';
import { Button } from '@material-ui/core';

export default styled(Button)`
  text-transform: none !important;
  background-color: ${props => props.primary && '#1e88e5 !important'};
  color: ${props => props.primary && 'white !important'};
  font-size: small !important;
  font-weight: 500 !important;
`;
