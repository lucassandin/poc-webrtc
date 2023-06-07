import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonGroup = styled.div`
  display: inherit;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 10rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #000000;
  border-radius: 4px;
  border: none;
  color: #fff;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
  margin-top: 3rem;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
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