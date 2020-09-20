import styled from 'styled-components';
import { Drawer } from '@material-ui/core';

export default styled(Drawer)`
  && .MuiDrawer-paper {
    margin: 3% 0% 3% 3%;
    bottom: 0;
    height: auto;
    width: ${props => (props.fixedwidth ? '225px' : '18%')};
    background-color: #e1f5fe !important;
    color: white;
  }
`;
