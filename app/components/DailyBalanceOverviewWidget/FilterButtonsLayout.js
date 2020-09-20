import styled from 'styled-components';

const FilterButtonsLayout = styled.div`
  position: absolute;
  margin-top: ${props => props.theme.spacing(-40)}px;
  margin-left: ${props => props.theme.spacing(80)}px;
  font-size: small;
  select {
    height: 18px;
  }

  ${props => props.theme.breakpoints.down('sm')} {
    margin-left: ${props => props.theme.spacing(36)}px;
  }

  .MuiNativeSelect-select.MuiNativeSelect-select {
    font-size: small;
  }
`;

export default FilterButtonsLayout;
