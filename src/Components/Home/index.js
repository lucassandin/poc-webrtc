import React from "react"
import * as S from './styles';

export default function HomeComponent({ children }) {

  return (
    // home component
    <S.Home>
      { children }
    </S.Home>
  )
}