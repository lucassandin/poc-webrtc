import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import userself from "../../Assets/user-self.png";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function RecomendacaoFacial() {
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
          <SS.Warning>
            <SS.Img src={userself} alt="Selfie" />
          </SS.Warning>
        </S.Row>
        <S.Row>
          <S.Title>Agora iremos precisar de fazer o reconhecimento facial.</S.Title>
        </S.Row>
        <S.Row>
            <ul>
              <li>Posicione seu rosto dentro da marcação.</li>
              <li>Esteja em um lugar com boa iluminação.</li>
              <li>Evite utilizar óculos, boné ou coisas que tampem alguma parte do seu rosto.</li>
              <li>Se necessário peça ajuda a alguém de confiança.</li>
            </ul>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/agendamento/reconhecimento-facial")}>Estou pronto(a)</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}