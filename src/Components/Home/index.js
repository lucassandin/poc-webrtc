import React from "react"
import { useNavigateContext } from "../../Context/NavigateContext"

import * as S from '../../Components/styles/styles';

export default function HomeComponent({ children }) {
  const { isOverlay } = useNavigateContext();

  return (
    // home component
    <S.Home isOverlay={isOverlay}>
      { children }
    </S.Home>
  )
}