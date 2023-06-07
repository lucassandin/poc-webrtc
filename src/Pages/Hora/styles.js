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
  margin-top: 1rem;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-top: 3rem;
`;

export const InputContent = styled.div`
  display: inherit;
  flex-direction: column;
  gap: 3vh;
  margin-top: 30px;

  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 45vh;
`;

export const InputGroupd = styled.div`
  display: inherit;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

export const Placeholder = styled.span`
  position: absolute;
  top: 2.9rem;
  left: 1rem;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

export const Input = styled.input`
  border: 2px solid #000000;
  border-radius: 4px;
  height: 70px;
  padding-left: 1rem;
  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;

  &::-webkit-input-placeholder { /* Edge */
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }

  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
`;
