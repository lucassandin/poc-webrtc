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
  margin-top: 5rem;
  margin-bottom: 2rem;
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
  font-size: 22px;
  line-height: 37px;
  color: #000000;
  margin-top: 1rem;
  text-align: center;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-top: 3rem;
`;

export const Location = styled.div`
  display: inherit;
  justify-content: center;
  margin: 5rem 0 2rem;
`;

export const Contorno = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dedede;
  border-left: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  border-radius: 4px;
  gap: 0rem;
  margin-top: 30px;
`;

export const Row = styled.div`
  border-top: 1px solid #dedede;
  padding: 1rem 0 1rem 1rem;
  display: inherit;
  flex-direction: column;
`;

export const Column = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;