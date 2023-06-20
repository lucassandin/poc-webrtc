import React from "react";
import { useNavigateContext } from "../../Context/NavigateContext"

import * as S from '../../Components/styles/styles';

export default function Content({ children }) {
  const { isOverlay } = useNavigateContext();

  return (
    // content
    <S.Content isoverlay={isOverlay}>
      { children }
    </S.Content>
  )
}