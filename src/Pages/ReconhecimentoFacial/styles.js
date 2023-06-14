import { styled } from "styled-components";

export const ImagemContent = styled.div`
  display: inherit;
  justify-content: center;
  height: 40vh;
`;

export const Img = styled.img`
  width: fit-content;
`;

export const TextOverlay = styled.div`
  z-index: 9999;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  & span {
    color: #FFFFFF;
  }
`;

export const ValidateFacial = styled.span`
  position: absolute;
  margin: auto 0;
  width: 60vw;
  height: 45vh;
  border-radius: 45%;
  border: 100vw solid #4a4a4a7d;
  z-index: 999;
`;
