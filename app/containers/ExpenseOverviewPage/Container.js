import styled from 'styled-components';
import { Container } from '@material-ui/core';

export default styled(Container)`
  color: #fff;
  background-color: #1976d2;
  overflow-y: auto;
  flex-grow: 1;
  padding: 50px;
  ${props => props.theme.breakpoints.up('sm')} {
    width: 76% !important;
    margin: 3% 21% !important;
  }
  ${props => props.theme.breakpoints.down('sm')} {
    width: 94% !important;
    margin: 3% 3% !important;
  }
  max-width: 100% !important;
  bottom: 0;
  top: 0;
  position: absolute;
`;
