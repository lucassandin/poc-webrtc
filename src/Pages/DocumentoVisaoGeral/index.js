import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import frontDocument from "../../Assets/front-document-no-border.png";
import backDocument from "../../Assets/back-document-no-border.png";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function DocumentoVisaoGeral() {
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
          <S.Column>
              <S.Span>Frente:</S.Span>
              <SS.Img src={frontDocument} alt="Documento frente" />
          </S.Column>
        </S.Row>

        <S.Row>
          <S.Column>
              <S.Span>Verso:</S.Span>
              <SS.Img src={backDocument} alt="Documento verso" />
          </S.Column>
        </S.Row>
        <S.Row>
          <S.Span>
            <div>
            Importante:
            </div>
            Posicione seu documento dentro da marcação.
          </S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonSecondary onClick={() => navigate(`/agendamento/documento-frente`)}>Refazer</S.ButtonSecondary>
          </S.Column>
          <S.Column>
            <S.ButtonPrimary onClick={() => navigate(`/agendamento/documentos-recebidos`)}>Enviar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}