import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";
import HomeComponent from "../../Components/Home";

import * as S from '../../Components/styles/styles';

export default function Hora() {
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
          <S.Title>Agora escolha o horário para o seu agendamento:</S.Title>
        </S.Row>
        <S.Row>
          <S.InputContent>
            <S.InputGroup>
              <S.Input type="check" name="hora" placeholder="12:00" readOnly />
            </S.InputGroup>

            <S.InputGroup>
              <S.Input type="check" name="hora" placeholder="12:30" readOnly />
            </S.InputGroup>

            <S.InputGroup>
              <S.Input type="check" name="hora" placeholder="13:00" readOnly />
            </S.InputGroup>

            <S.InputGroup>
              <S.Input type="check" name="hora" placeholder="13:30" readOnly />
            </S.InputGroup>

            <S.InputGroup>
              <S.Input type="check" name="hora" placeholder="14:00" readOnly />
            </S.InputGroup>

            <S.InputGroup>
              <S.Input type="check" name="hora" placeholder="14:30" readOnly />
            </S.InputGroup>
          </S.InputContent>
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
    </HomeComponent>
  )
}