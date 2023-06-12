import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;

`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  z-index: 10;
  margin: 2rem 0;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const VideoContent = styled.div`
  position: relative;
  
`;

export const Footer = styled.div`
  
`;

export const Tipo = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(0, 0, 0, 0.88);
  border-radius: 4.40789px 0px 0px 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #FFFFFF;
  width: 10rem;
  height: 3rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0px;
`;