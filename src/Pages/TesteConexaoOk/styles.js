import { styled } from "styled-components";

export const Title2 = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 37px;
  color: #000000;
  margin-top: 3rem;
`;

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