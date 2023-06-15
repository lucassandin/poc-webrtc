import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import documentoAssinatura from "../../Assets/documento-assinatura.png";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";
import Dropzone from "../../Components/Dropzone";

import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function Assinatura() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <SS.Warning>
            <SS.Img src={documentoAssinatura} alt="Assinatura" />
          </SS.Warning>
        </S.Row>
        <S.Row>
          <S.Title>Documento para assinar</S.Title>
        </S.Row>
        <S.Row>
          <S.Span>
            Para prosseguirmos com a abertura da sua conta é necessário assinar os documentos
          </S.Span>
        </S.Row>
        <S.Row>
          <Dropzone />
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/chamada-de-video/finalizado")}>Assinar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}