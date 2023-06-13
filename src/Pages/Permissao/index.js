import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import location from "../../Assets/location.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";
import HomeComponent from "../../Components/Home";

import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function Permissao() {
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
        <SS.Location>
          <img src={location} alt="Location" />
        </SS.Location>
        </S.Row>
        <S.Row>
          <S.Title>Permitir que o app tenha acesso a localização do dispositivo?</S.Title>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary onClick={() => navigate("/agendamento/recomendacao-facial")}>Dar permissão</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </HomeComponent>
  )
}