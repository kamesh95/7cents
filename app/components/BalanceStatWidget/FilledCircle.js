import styled from 'styled-components';

const FilledCircle = styled.span`
  filter: drop-shadow(1px 1px 2px #1976d2);
  position: absolute;
  margin-top: ${props => props.theme.spacing(-45)}px;
  margin-left: ${props => props.theme.spacing(14.3)}px;
  font-size: 61px;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  pointer-events: none;
`;

export default FilledCircle;
