import React from "react";

import * as S from './styles';

export default function Content({ children }) {

  return (
    // content
    <S.Content>
      { children }
    </S.Content>
  )
}