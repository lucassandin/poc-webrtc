import { styled } from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  /* gap: 20px; */
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
  padding: 1rem;
  background: none;
  border: none;
`;
