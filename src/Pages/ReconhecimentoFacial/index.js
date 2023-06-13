import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate, useLocation  } from "react-router-dom";

import face from "../../Assets/face.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";
import HomeComponent from "../../Components/Home";

import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function ReconhecimentoFacial() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setHeaderBack } = useNavigateContext();

  const handleNavigate = () => {
    if (location.pathname === '/chamada-de-video/reconhecimento-facial') {
      navigate("/chamada-de-video/testeconexao")
    } else {
      navigate("/agendamento/recomendacao-anexo")
    }
  }

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <HomeComponent>
      {/* central content */}
      <Content>
        <S.Row>
          <SS.ImagemContent>
            <SS.Img src={face} alt="Face" />
          </SS.ImagemContent>
        </S.Row>
        <S.Row>
          <S.Span>
            <div>
            Importante:
            </div>
            <ol>
              <li>Posicione seu rosto dentro da marcação.</li>
              <li>Esteja em um lugar com boa iluminação.</li>
              <li>Caso use óculos, retire por favor!</li>
            </ol>
          </S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={handleNavigate}>Enviar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </HomeComponent>
  )
}