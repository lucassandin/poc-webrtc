import React, { useEffect } from "react";
import { useNavigateContext } from "../../Context/NavigateContext";
import { useNavigate } from "react-router-dom";

import desenhoFacial from "../../Assets/desenho-facial.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from "../../Components/styles/styles";
import * as SS from "./styles";

export default function Orientacoes() {
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
            <img src={desenhoFacial} alt="Reconhecimento facial" />
          </SS.Location>
        </S.Row>

        <S.Row>
          <S.Title>
            Agora iremos precisar de fazer o reconhecimento facial.
          </S.Title>
        </S.Row>

        <S.Row>
          <S.Span>
            <ol>
              <li>Posicione seu rosto dentro da marcação.</li>
              <li>Esteja em um lugar com boa iluminação.</li>
              <li>
                Evite utilizar óculos, boné ou coisas que tampem alguma parte do
                seu rosto.
              </li>
              <li>Se necessário peça ajuda a alguém de confiança.</li>
            </ol>
          </S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/atendimento/reconhecimento-facial")}>Continuar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  );
}
