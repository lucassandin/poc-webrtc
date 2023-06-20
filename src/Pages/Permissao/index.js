import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import location from "../../Assets/icon-location.png";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function Permissao() {
  const navigate = useNavigate();
  const { setHeaderBack, setBackgroundColor  } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
    setBackgroundColor('true')
  })

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <S.IconeCentral>
            <SS.Img src={location} alt="Ícone de localização" />
          </S.IconeCentral>
        </S.Row>
        <S.Row style={{
          marginTop: '20px'
        }}>
          <S.Title>Permitir que o app tenha acesso a localização do dispositivo?</S.Title>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/agendamento/recomendacao-facial")}>Dar permissão</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}