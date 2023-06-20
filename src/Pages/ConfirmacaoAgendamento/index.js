import React, { useEffect } from "react";
import { useNavigateContext } from "../../Context/NavigateContext";
import { useNavigate } from "react-router-dom";

import conexaoOk from "../../Assets/conexao-ok.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from "../../Components/styles/styles";
import * as SS from "./styles";

export default function ConfirmacaoAgendamento() {
  const navigate = useNavigate();
  const { setHeaderBack, setBackgroundColor  } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true);
    setBackgroundColor('true')
  });

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <S.IconeCentral>
            <SS.Img src={conexaoOk} alt="Ampola" />
          </S.IconeCentral>
        </S.Row>
        <S.Row>
          <S.Title>Agendamento feito!</S.Title>
        </S.Row>
        <S.Row>
          <S.Span>
            Seu agendamento está marcado para dia <b>26/02/2023</b> as <b>13:30</b>.
          </S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true" onClick={() => navigate("/")}>
              Ok
            </S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  );
}
