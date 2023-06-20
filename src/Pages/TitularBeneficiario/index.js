import React, { useEffect,  } from "react"
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext"

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import iconOla from "../../Assets/icon-ola.png";

import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function TitularBeneficiario() {
  const navigate = useNavigate();
  const { setHeaderBack, setBackgroundColor } = useNavigateContext();

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
            <SS.Img src={iconOla} alt="Ícone dizendo olá" />
          </S.IconeCentral>
        </S.Row>
        <S.Row  style={{
          marginTop: '20px'
        }}>
          <S.Column>
            <S.Title>Antes de iniciamos, gostaríamos de te conhecer. :)</S.Title>
          </S.Column>
        </S.Row>
        <S.Row>
          <S.Column>
            <div
              style={{
                width: '90vw',
                marginTop: '30px'
              }}
            >
              <S.Span>Você é o titular do benefício?</S.Span>
            </div>
          </S.Column>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonSecondary onClick={() => navigate("/")}>Não</S.ButtonSecondary>
          </S.Column>
          <S.Column>
            <S.ButtonPrimary onClick={() => navigate("/agendamento/preencher-dados")}>Sim</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}