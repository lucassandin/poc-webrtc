import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonGroup = styled.div`
  display: inherit;
  justify-content: center;
  gap: 3rem;
  position: absolute;
  bottom: 30px !important;
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
  display: inherit;
  justify-content: center;
  flex-direction: column;
`;

export const VideoContent = styled.div`
  border: solid 1px red;
`;