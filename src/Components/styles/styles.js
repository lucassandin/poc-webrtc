import { styled } from "styled-components";

export const Home = styled.div`
  /* border: 1px red solid; */
  height: calc(100vh);
  position: relative;
  margin: ${props => props.isoverlay === "true" ? "0" : "0 1rem" };

  display: flex;
  justify-content: center;
  flex-flow: wrap;
  overflow: hidden;
`;
export const Header = styled.div`
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
`;
export const Footer = styled.div`
  /* border: 1px yellow solid; */
  position: absolute;
  width: calc(100% - 2px);
  bottom: 0;
  padding: 2.5vh 0 10vh;
  z-index: 9999;
  background: ${props => props.isoverlay === "true" ? "rgba(74, 74, 74, 0.8)" : "none" };
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
  /* width: 100%; */
  width: ${props => props.datawidth === "true" ? "3rem" : "100%" };
  align-items: center;
`;

export const Logo = styled.img`
  /* margin: 0 auto; */
  width: ${props => props.fullwidth === "true" ? "139px" : "234px"};
  margin: ${props => props.fullwidth === "true" ? "0" : "3vh 0px"}; ;
  height: 34px;
  padding: 0 5rem;
`;

export const LogoTitle = styled.span`
  margin: ${props => props.fullwidth === "true" ? "0" : "3vh 0px"}; ;
  height: 34px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #FFFFFF;
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

export const ValidateShape = styled.img`
  position: absolute;
  top: 0;
  margin: 0 auto;
  z-index: 999;
  height: 100vh;
  overflow: hidden;
`;