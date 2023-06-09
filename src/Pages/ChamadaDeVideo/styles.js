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

  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SessionGroup = styled.div`
  display: inherit;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Sessions = styled.div`
  background: #000000;
  border-radius: 4px;
  border: none;
  color: #fff;
  padding: 1rem 1rem;
  display: inherit;
`;

export const ButtonClipBoard = styled.button`
  border: none;
  padding: 0.5rem 1rem;
`;

export const InputContent = styled.div`
  display: inherit;
  flex-direction: column;
  gap: 3vh;
  margin-top: 30px;
`;

export const InputGroupd = styled.div`
  display: inherit;
  flex-direction: column;
  position: relative;
`;