import React, { useEffect } from "react";
import { useNavigateContext } from "../../Context/NavigateContext";
import { useNavigate } from "react-router-dom";

import conexaoOk from "../../Assets/conexao-ok.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from "../../Components/styles/styles";
import * as SS from "./styles";

export default function TesteConexaoOk() {
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
          <SS.Location>
            <img src={conexaoOk} alt="Teste conexao ok" />
          </SS.Location>
        </S.Row>

        <S.Row>
          <S.Title>Conexão com internet ok!</S.Title>
        </S.Row>

        <S.Row>
          <S.Span>Estamos prontos para iniciar o atendimento.</S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary
              fullwidth="true"
              onClick={() => navigate("/chamada-de-video")}
            >
              Estou pronto
            </S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  );
}
