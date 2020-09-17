import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

export default styled(IconButton)`
  ${props => props.theme.breakpoints.up('sm')} {
    display: none !important;
  }
  ${props => props.theme.breakpoints.down('sm')} {
    margin-left: 5% !important;
    margin-top: 5% !important;
    z-index: 1;
    color: white !important;
  }
`;
