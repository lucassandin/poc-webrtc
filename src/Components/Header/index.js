import React from "react";
import { useNavigate  } from 'react-router-dom'
import { useNavigateContext } from "../../Context/NavigateContext";

import setaVoltar from "../../Assets/icons/arrow-back-white.svg";
import cross from "../../Assets/icons/cross.svg";
import logoAzul from "../../Assets/logo-mercantil-oficial.svg";
import logoBranca from "../../Assets/logo.svg";
import * as S from '../../Components/styles/styles';

export default function Header() {
  const navigate = useNavigate()
  const { headerBack, isOverlay, titleHeader, backgroundColor } = useNavigateContext();

  return (
    // header
    <S.Header isoverlay={isOverlay} background={backgroundColor} >
      <S.Row>
        <S.Column datawidth={"true"}>
          <div style={{
            position: 'absolute',
            left: '30px'
          }}>
            {headerBack ? (
              <S.ButtonBack onClick={() => navigate(-1)}>
                <img src={setaVoltar} alt="Voltar" />
              </S.ButtonBack>
            ) : (
              <S.ButtonBack onClick={() => navigate(-1)}>
                <img src={cross} alt="Voltar" width={"12"} height={"12"} />
              </S.ButtonBack>
            )}
          </div>
        </S.Column>

        <S.Column> 
          <div style={{
          }}>
            {titleHeader !== "" ? (
              <S.LogoTitle fullwidth={(headerBack ? "true" : "false")}>{titleHeader}</S.LogoTitle>
            ) : (
              <>
                {backgroundColor === 'true' 
                  ? (<S.Logo fullwidth={(headerBack ? "true" : "false")} src={logoBranca} alt="Logo" />) 
                  : (<S.Logo fullwidth={(headerBack ? "true" : "false")} src={logoAzul} alt="Logo" />)
                }
              </>
            )}
          </div>
        </S.Column>
      </S.Row>
    </S.Header>
  )
}