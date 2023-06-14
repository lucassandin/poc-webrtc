import { styled } from "styled-components";

export const Warning = styled.div`
  display: inherit;
  justify-content: center;
  margin: 5rem 0 2rem;
  flex-direction: column;
  text-align: center;

  @media (max-height: 667px) {
    display: inherit;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 1rem 0 0;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;