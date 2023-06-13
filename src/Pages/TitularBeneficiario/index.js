import React from "react"
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";
import HomeComponent from "../../Components/Home";

import * as S from '../../Components/styles/styles';

export default function TitularBeneficiario() {
  const navigate = useNavigate();
 

  return (
    <HomeComponent>
      {/* central content */}
      <Content>
        <S.Row>
          <h1>Antes de iniciamos, gostaríamos de te conhecer. :)</h1>
        </S.Row>
        <S.Row>
          <p>Você é o titular do benefício?</p>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonSecondary>Não</S.ButtonSecondary>
          </S.Column>
          <S.Column>
            <S.ButtonPrimary fullwidth={true} onClick={() => navigate("/agendamento/preencher-dados")}>Sim</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </HomeComponent>
  )
}