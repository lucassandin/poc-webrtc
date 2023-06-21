import React, { useEffect } from "react";
import { useNavigateContext } from "../../Context/NavigateContext";
import LinearWithValueLabel from "../../Components/ProgressBar";

import verificandoConexao from "../../Assets/verificando-conexao.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from "../../Components/styles/styles";
import * as SS from "./styles";

export default function TesteConexaoVerificando() {
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
          <SS.Location>
            <img src={verificandoConexao} alt="Verificando conexao" />
          </SS.Location>
        </S.Row>

        <S.Row>
          <S.Title>Estamos testando a sua conexão a internet.</S.Title>
        </S.Row>

        <S.Row>
          <S.Span>
            Mantenha o telefone nessa tela para que ocorra tudo bem no teste de
            conexão e possamos iniciar o atendimento.
          </S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <LinearWithValueLabel />
            {/* <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/atendimento/validar-conexao/ok")}>Continuar</S.ButtonPrimary> */}
          </S.Column>
        </S.Row>
      </Footer>
    </>
  );
}
