import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export default styled(Paper)`
  padding: 10px;
  background-color: #f5f8fd;
  width: ${props => props.theme.spacing(27)}px;
  height: ${props => props.theme.spacing(25)}px;
  margin: 20px;

  ${props => props.theme.breakpoints.down('sm')} {
    margin-left: 0px;
    margin-top: 20px;
    width: 100%;
  }
`;
