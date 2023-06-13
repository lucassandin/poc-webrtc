import { styled } from "styled-components";

export const Warning = styled.div`
  display: inherit;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 2rem 0;

  @media (max-height: 667px) {
    display: inherit;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 1rem 0 0;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 auto;
`;