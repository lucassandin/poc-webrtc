import { styled } from "styled-components";

export const Img = styled.img`
  height: 150px;
  object-fit: cover;
`;

export const Div = styled.div`
  margin-bottom: 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  text-align: start;
  width: 100%;
`;

export const DocumentDesciption = styled.span`
  color: #ffffff;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  z-index: 99;
`;

export const Olho = styled.img`
  z-index: 99;
`;

export const CardRound = styled.div`
  width: 100%;
  height: 150px;
  position: absolute;
  bottom: 14px;
  right: 4px;
  z-index: 9;
  background: linear-gradient(180deg, rgba(74, 74, 74, 0.005) 0%, rgba(0, 0, 0, 0.5) 79.54%);
  border-radius: 4px;
`;