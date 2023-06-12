import { styled } from "styled-components";

export const Home = styled.div`
  /* border: 1px red solid; */
  height: calc(90vh);
  position: relative;
`;
export const Header = styled.div`
  /* height: calc(10vh); */
  /* border: 1px blue solid; */
  position: relative;
  top: 0;
  padding: 2.5vh 0;
`;
export const Content = styled.div`
  /* border: 1px green solid; */
  height: inherit;
  max-height: 70vh;
  margin: auto 0;
`;
export const Footer = styled.div`
  /* border: 1px yellow solid; */
  /* height: calc(10vh); */
  position: absolute;
  width: calc(100% - 2px);
  bottom: 0;
  padding: 2.5vh 0px;
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
  width: 139px;
  height: 34px;
  padding: 0 5rem;
`;

export const Casal = styled.img`
  width: 267px;
  height: 376px;
`;

export const ButtonPrimary = styled.button`
  border: solid 1px blue;
  width: 195px;
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