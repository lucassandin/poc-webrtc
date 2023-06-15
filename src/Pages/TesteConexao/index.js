import React, { useEffect } from "react";
import { useNavigateContext } from "../../Context/NavigateContext";
import { useNavigate } from "react-router-dom";

import desenhoFacilOk from "../../Assets/desenho-facial-ok.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from "../../Components/styles/styles";
import * as SS from "./styles";

export default function TesteConexao() {
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
            <img src={desenhoFacilOk} alt="Teste conexao" />
          </SS.Location>
        </S.Row>

        <S.Row>
          <S.Title>Facial validada :)</S.Title>
        </S.Row>

        <S.Row>
          <S.Span>
            Agora precisamos testar se a sua conexão com a internet está boa
            para ocorra tudo certo com o seu atendimento
          </S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/atendimento/testeconexaoverificando")}>Estou pronto</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  );
}
