import { styled } from "styled-components";

export const Home = styled.div`
  /* border: 1px red solid; */
  height: calc(100vh);
  position: relative;
  margin: ${props => props.isoverlay === "true" ? "0" : "0 1rem" };

  display: flex;
  justify-content: center;
  flex-flow: wrap;
`;
export const Header = styled.div`
  /* height: calc(10vh); */
  /* border: 1px blue solid; */
  position: ${props => props.isoverlay === "true" ? "absolute" : "relative" };
  top: 0;
  padding: 2.5vh 0;
  width: 100%;
  z-index: 9999;
`;
export const Content = styled.div`
  /* border: 1px green solid; */
  height: inherit;
  max-height: 70vh;

  /* @media (min-width: 1080px) 
  {
    body
    {
      width: 50%;
      margin: 0 auto;;
    }
  } */
`;
export const Footer = styled.div`
  /* border: 1px yellow solid; */
  /* height: calc(10vh); */
  position: absolute;
  width: calc(100% - 2px);
  bottom: 0;
  padding: 2.5vh 0 10vh;
  z-index: 9999;

  @media (min-height: 480px) {
    padding: 0;
    margin-bottom: 1rem;
  }
`;

export const ButtonBack = styled.button`
  border: none;
  background: none;
  max-width: 6rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Column = styled.div`
  /* border: solid 1px black; */
  display: inherit;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const Logo = styled.img`
  /* margin: 0 auto; */
  width: ${props => props.fullwidth === "true" ? "139px" : "234px"};
  margin: ${props => props.fullwidth === "true" ? "0" : "3vh 0px"}; ;
  height: 34px;
  padding: 0 5rem;
`;

export const Casal = styled.img`
  width: 267px;
  height: 376px;

  @media (max-height: 480px) {
    width: 20vw;
    height: 30vh;
  }
`;

export const ButtonPrimary = styled.button`
  border: solid 1px blue;
  /* width: 195px; */
  width: ${props => props.fullwidth === "true" ? "100%" : "157px"};

  height: 60px;

  background: #1526FF;
  border-radius: 4px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  color: #FFFFFF;

`;
export const ButtonSecondary = styled.button`
  width: 120px;
  height: 60px;

  border: 1px solid #A5A5A5;
  border-radius: 4px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;
  color: #1526FF;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
  margin-top: 1rem;
`;

export const InputContent = styled.div`
  display: inherit;
  flex-direction: column;
  gap: 3vh;
  margin-top: 30px;
  width: 100%;

  overflow: scroll;
  height: 50vh;
`;

export const InputGroup = styled.div`
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
export const Input = styled.input`
  border: 2px solid #000000;
  border-radius: 4px;
  height: 70px;
  padding-left: 1rem;

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

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  color: #000000;
  margin-top: 3rem;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;