import { styled } from "styled-components";

export const Header = styled.div`
  /* height: calc(10vh); */
  position: relative;
  top: 0;
  padding: 2.5vh 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Column = styled.div`
  display: inherit;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const ButtonBack = styled.button`
  border: none;
  background: none;
  max-width: 6rem;
`;

export const Logo = styled.img`
  /* margin: 0 auto; */
  width: 139px;
  height: 34px;
  padding: 0 5rem;
`;