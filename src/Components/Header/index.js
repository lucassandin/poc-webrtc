import React from "react";
import { useNavigate  } from 'react-router-dom'

import logo from "../../Assets/logo.svg";
import setaVoltar from "../../Assets/seta-back.svg";
import * as S from './styles';
import { useNavigateContext } from "../../Context/NavigateContext";

export default function Header() {
  const navigate = useNavigate()
  const { headerBack } = useNavigateContext();

  const handleNavite = () => {
    navigate(-1);
  }

  return (
    <S.Header>
      {headerBack ? (
        <S.Button onClick={handleNavite}>
          <img src={setaVoltar} alt="Voltar" />
        </S.Button>
      ) : <></>}
      <S.Logo src={logo} alt="Logo" />
    </S.Header>
  )
}