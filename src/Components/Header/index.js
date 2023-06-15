import React from "react";
import { useNavigate  } from 'react-router-dom'
import { useNavigateContext } from "../../Context/NavigateContext";

import setaVoltar from "../../Assets/seta-back.svg";
import logo from "../../Assets/logo-mercantil-oficial.svg";
import * as S from '../../Components/styles/styles';

export default function Header() {
  const navigate = useNavigate()
  const { headerBack, isOverlay, titleHeader } = useNavigateContext();

  return (
    // header
    <S.Header isoverlay={isOverlay}>
      <S.Row>
        <S.Column>
          {headerBack ? (
            <S.ButtonBack onClick={() => navigate(-1)}>
              <img src={setaVoltar} alt="Voltar" />
            </S.ButtonBack>
          ) : <></>}
        </S.Column>

        <S.Column>
          <div>
            {titleHeader !== "" ? (
              <S.LogoTitle fullwidth={(headerBack ? "true" : "false")}>{titleHeader}</S.LogoTitle>
            ) : (
              <S.Logo fullwidth={(headerBack ? "true" : "false")} src={logo} alt="Logo" />
            )}
          </div>
        </S.Column>

        <S.Column>
        </S.Column>
      </S.Row>
    </S.Header>
  )
}