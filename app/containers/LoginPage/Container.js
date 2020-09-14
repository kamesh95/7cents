import styled from 'styled-components';
import { Container } from '@material-ui/core';

export default styled(Container)`
  padding: 2vh;
  justify-content: center !important;
  align-items: center !important;
  display: flex !important;

  && .MuiButton-contained.Mui-disabled {
    background-color: #6da9c5 !important;
  }
`;
