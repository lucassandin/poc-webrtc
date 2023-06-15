import { styled } from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  z-index: 10;
  margin: 2rem 0;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #000000;
  border-radius: 4px;
  border: none;
  color: #fff;
`;

export const ButtonMedia = styled.button`
  border-radius: 15rem;
  border: none;
  color: #fff;
  padding: 1rem;
  width: 80px;
  height: 80px;
  background: #D9D9D9;
  /* background: ${props => 
  (props.muted === false || 
    props.videomuted === false || 
    props.ended === false) ? "#D9D9D9" : "#ff0023ba" }; */

  &:active {
    background: #919191;
  }
`;
