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


