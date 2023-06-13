import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import load from "../../Assets/load.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function TesteConexaoVerificando() {
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
            <SS.Location>
              <img src={load} alt="Load" />
            </SS.Location>
          </S.Row>

          <S.Row>
            <S.Title>Estamos testando a sua conexão a internet.</S.Title>
          </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/chamada-de-video/testeconexaook")}>Continuar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}