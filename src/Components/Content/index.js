import React from "react";

import * as S from '../../Components/styles/styles';

export default function Content({ children }) {

  return (
    // content
    <S.Content>
      { children }
    </S.Content>
  )
}