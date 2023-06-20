import React, { useEffect } from "react";
import { useNavigateContext } from "../../Context/NavigateContext";
import { useNavigate } from "react-router-dom";

import documentoAnexoIlustrativo from "../../Assets/documento-ilustrativo.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from "../../Components/styles/styles";
import * as SS from "./styles";

export default function RecomendacaoAnexoDocumento() {
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
          <SS.Location>
            <img
              src={documentoAnexoIlustrativo}
              alt="Recomendacao anexo ilustrativo"
            />
          </SS.Location>
        </S.Row>

        <S.Row  style={{
          marginTop: '20px'
        }}>
          <S.Title>
            Tudo certo com a facial, agora iremos precisar do seu documento.
          </S.Title>
        </S.Row>

        <S.Row>
          <S.Span>
            <ol>
              <li>Posicione seu documento dentro da marcação.</li>
              <li>Esteja em um lugar com boa iluminação.</li>
              <li>Retire seu documento do plástico.</li>
              <li>Se necessário peça ajuda a alguém de confiança.</li>
              <li>Documentos aceitos: Identidade e carteira de motorista.</li>
            </ol>
          </S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary
              fullwidth="true"
              onClick={() => navigate("/agendamento/documento-frente")}
            >
              Estou pronto
            </S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  );
}
