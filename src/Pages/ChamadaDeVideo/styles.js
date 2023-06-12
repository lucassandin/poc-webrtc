import { styled } from "styled-components";

export const Content = styled.div`
  /* display: flex;
  flex-direction: column; */

  &.OT_mirrored .OT_root .OT_publisher .OT_fit-mode-cover {
    height: 240px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  z-index: 10;
  margin-top: 2rem;
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

  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VideoGroup = styled.div`
`;

export const VideoContent = styled.div`
`;

export const Footer = styled.div`
  
`;