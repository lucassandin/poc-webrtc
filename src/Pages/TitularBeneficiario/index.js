import React from "react"
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';

export default function TitularBeneficiario() {
  const navigate = useNavigate();
 

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <S.Column>
            <S.Title>Antes de iniciamos, gostaríamos de te conhecer. :)</S.Title>
          </S.Column>
        </S.Row>
        <S.Row>
          <S.Column>
            <S.Span>Você é o titular do benefício?</S.Span>
          </S.Column>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonSecondary>Não</S.ButtonSecondary>
          </S.Column>
          <S.Column>
            <S.ButtonPrimary  onClick={() => navigate("/agendamento/preencher-dados")}>Sim</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}