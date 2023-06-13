import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import backDocument from "../../Assets/backdocument.png";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";
import HomeComponent from "../../Components/Home";

import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function AnexoDocumentoVerso() {
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
          <S.Column>
              <SS.Img src={backDocument} alt="Documento verso" />
          </S.Column>
        </S.Row>

        <S.Row>
          <S.Span>
            <div>
            Importante:
            </div>
            Posicione seu documento dentro da marcação.
          </S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth={true} onClick={() => navigate("/agendamento/documento-visao-geral")}>Enviar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </HomeComponent>
  )
}