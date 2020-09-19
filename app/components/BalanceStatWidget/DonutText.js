import styled from 'styled-components';

const DonutText = styled.div`
  position: relative;
  top: ${props => props.theme.spacing(-25)}px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: black;
  font-weight: 600;
  text-align: center;
  pointer-events: none;
`;

export default DonutText;
