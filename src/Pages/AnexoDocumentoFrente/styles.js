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

  @media (max-width: 820px) {
    position: fixed;
    bottom: 1rem;
    width: 89vw;
    resize: vertical;
    overflow: auto;
    max-width: 100% !important;
  }

  @media (min-width: 820px) and (max-width: 1024px) {
    display: inherit;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 14rem;
    width: 95vw;
    resize: vertical;
    overflow: auto;
    max-width: 100%!important;
  }
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
  margin-top: 3rem;
`;

export const ImagemContent = styled.div`
  display: inherit;
  justify-content: center;
`;

export const Img = styled.img`
  width: fit-content;
`;

export const Contorno = styled.div`
  position: relative;
`;
export const Tipo = styled.div`
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
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
`;