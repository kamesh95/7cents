import styled from 'styled-components';

export default styled.div`
  ${props => props.theme.breakpoints.up('sm')} {
    display: flex;
    flex-direction: row;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    display: flex;
    flex-direction: column;
  }
`;
