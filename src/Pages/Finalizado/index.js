import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import emojiFeliz from "../../Assets/emoji-feliz.png";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function Finalizado() {
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
            <SS.Img src={emojiFeliz} alt="Emoji feliz" />
          </S.IconeCentral>
        </S.Row>
        <S.Row>
          <S.Title>Atendimento finalizado, para acessar seu benefício siga o passo a passo:</S.Title>
        </S.Row>
        <S.Row>
          <ul>
            <li>Baixe nosso App na loja do seu aplicativo clicando aqui</li>
            <li>Faça login conforme as orientações do atendente.</li>
            <li>Se necessário peça ajuda a alguém de confiança.</li>
          </ul>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/")}>Obrigado</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}