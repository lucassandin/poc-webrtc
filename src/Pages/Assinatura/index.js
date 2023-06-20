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
  const { setHeaderBack, setBackgroundColor  } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
    setBackgroundColor('true')
  })

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <S.IconeCentral>
            <SS.Img src={documentoAssinatura} alt="Assinatura" />
          </S.IconeCentral>
        </S.Row>
        <S.Row style={{
          marginTop: '20px'
        }}>
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
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/atendimento/finalizado")}>Assinar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}