import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export default styled(Paper)`
  padding: 10px;
  position: relative;
  background-color: #f5f8fd;
  min-width: ${props => props.theme.spacing(95)}px;
  height: ${props => props.theme.spacing(40)}px;

  ${props => props.theme.breakpoints.down('sm')} {
    margin-left: 0px;
    margin-top: 20px;
    min-width: ${props => props.theme.spacing(50)}px;
  }
`;
