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

export const ValidateFacial = styled.img`
  position: absolute;
  top: 0;
  margin: 0 auto;
  z-index: 999;
  height: 100vh;
  overflow: hidden;
`;
