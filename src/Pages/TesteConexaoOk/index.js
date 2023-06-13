import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';

export default function Orientacoes() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <S.Title>Conexão com internet ok :)</S.Title>
        </S.Row>

        <S.Row>
          <S.Span>Estamos prontos para iniciar o atendimento.</S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/chamada-de-video")}>Estou Pronto</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}