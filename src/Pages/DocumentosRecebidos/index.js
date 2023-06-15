import React, { useEffect } from "react";
import { useNavigateContext } from "../../Context/NavigateContext";
import { useNavigate } from "react-router-dom";

import ampola from "../../Assets/ampola.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from "../../Components/styles/styles";
import * as SS from "./styles";

export default function DocumentosRecebidos() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true);
  });

  return ( 
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <S.IconeCentral>
            <SS.Img src={ampola} alt="Ampola" />
          </S.IconeCentral>
        </S.Row>
        <S.Row>
          <S.Title>Agora é só aguardar!</S.Title>
        </S.Row>
        <S.Row>
          <S.Span>
            Iremos analisar a sua identidade de acordo com a facial e o
            documento que nos enviou.
          </S.Span>
        </S.Row>
        <S.Row>
          <S.Span>Em até 2 horas iremos dar retorno.</S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary
              fullwidth="true"
              onClick={() => navigate("/agendamento/confirmacao-agendamento")}
            >
              Ok
            </S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  );
}
