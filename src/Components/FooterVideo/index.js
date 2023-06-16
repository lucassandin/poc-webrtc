import React from "react";
import { useNavigateContext } from "../../Context/NavigateContext"

import * as S from '../../Components/styles/styles';

export default function FooterVideo({ children }) {
  const { isOverlay } = useNavigateContext();

  return (
    // footer
    <S.FooterVideo isoverlay={isOverlay}>
      { children }
    </S.FooterVideo>
  )
}