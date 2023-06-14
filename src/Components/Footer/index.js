import React from "react";
import { useNavigateContext } from "../../Context/NavigateContext"

import * as S from '../../Components/styles/styles';

export default function Footer({ children }) {
  const { isOverlay } = useNavigateContext();

  return (
    // footer
    <S.Footer isoverlay={isOverlay}>
      { children }
    </S.Footer>
  )
}