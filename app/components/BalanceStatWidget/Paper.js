import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export default styled(Paper)`
  padding: 10px;
  background-color: #f5f8fd;
  width: ${props => props.theme.spacing(30)}px;
  height: ${props => props.theme.spacing(40)}px;
`;
