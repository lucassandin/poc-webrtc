import React, { useEffect,  } from "react"
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext"

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";
import HomeComponent from "../../Components/Home";

import casal from "../../Assets/casal-tela-inicial.png";
import * as S from '../../Components/styles/styles';

export default function Home() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(false)
  })

  return (
    // geral content
    <HomeComponent>
      {/* <S.Header>
        <S.Row>
          <S.Column>
            {headerBack ? (
              <S.ButtonBack onClick={() => navigate(-1)}>
                <img src={setaVoltar} alt="Voltar" />
              </S.ButtonBack>
            ) : <></>}
          </S.Column>

          <S.Column>
            <div>
              <S.Logo src={logo} alt="Logo" />
            </div>
          </S.Column>

          <S.Column>
          </S.Column>
        </S.Row>
      </S.Header> */}

      {/* central content */}
      <Content>
        <S.Row>
          <S.Casal src={casal} alt="Casal" />
        </S.Row>
        <S.Row>
          <h1>Vídeo Chamada</h1>
        </S.Row>
        <S.Row>
          <p>Lorem Ipsum is simply dummy text of.....</p>
        </S.Row>
      </Content>
      {/* <S.Content>
        <S.Row>
          <S.Casal src={casal} alt="Casal" />
        </S.Row>
        <S.Row>
          <h1>Vídeo Chamada</h1>
        </S.Row>
        <S.Row>
          <p>Lorem Ipsum is simply dummy text of.....</p>
        </S.Row>
      </S.Content> */}

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonSecondary>Já agendei</S.ButtonSecondary>
          </S.Column>
          <S.Column>
            <S.ButtonPrimary onClick={() => navigate("/agendamento/titular-beneficiario")}>Primeiro acesso</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
      {/* <S.Footer>
        <S.Row>
          <S.Column>
            <S.ButtonSecondary>Já agendei</S.ButtonSecondary>
          </S.Column>
          <S.Column>
            <S.ButtonPrimary>Primeiro acesso</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </S.Footer> */}
    </HomeComponent>
  )
}