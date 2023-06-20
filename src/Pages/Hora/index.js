import React, { useEffect } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from '../../Components/styles/styles';
import * as C from './styles';

export default function Hora() {
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
          <S.Title>Agora escolha o horário para o seu agendamento:</S.Title>
        </S.Row>
        <S.Row>
          <C.InputContent>
            <S.InputGroup>
              <button className="button" type="button">12:00</button>
            </S.InputGroup>

            <S.InputGroup>
              <button className="button" type="button">12:30</button>
            </S.InputGroup>

            <S.InputGroup>
              <button className="button" type="button">13:00</button>
            </S.InputGroup>

            <S.InputGroup>
              <button className="button" type="button">13:30</button>
            </S.InputGroup>

            <S.InputGroup>
              <button className="button" type="button">14:00</button>
            </S.InputGroup>

            <S.InputGroup>
              <button className="button" type="button">14:30</button>
            </S.InputGroup>
          </C.InputContent>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/agendamento/permissao")}>Continuar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}