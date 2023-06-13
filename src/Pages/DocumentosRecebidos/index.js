import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import documentReceive from "../../Assets/document-receive.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";
import HomeComponent from "../../Components/Home";

import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function DocumentosRecebidos() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <HomeComponent>
      {/* central content */}
      <Content>
        <S.Row>
          <SS.Location>
          <img src={documentReceive} alt="Documento recebido" />
          </SS.Location>
        </S.Row>

        <S.Row>
        <S.Title>Documentos recebido!</S.Title>
        </S.Row>

        <S.Row>
        <S.Span>Em até 2 horas iremos dar retorno.</S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth={true} onClick={() => navigate("/agendamento/confirmacao-agendamento")}>OK</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </HomeComponent>
  )
}