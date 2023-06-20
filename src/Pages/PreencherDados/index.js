import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';

export default function PreencherDados() {
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
          <S.Title>Olá, preencha os campos abaixo:</S.Title>
        </S.Row>
        <S.Row>
          <S.InputContent>
            <S.InputGroup>
              <S.Label>CPF</S.Label>
              <S.Input name="cpf" placeholder="Digite seu CPF"/>
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>Nome</S.Label>
              <S.Input name="nome" placeholder="Informe o nome"/>
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>Celular</S.Label>
              <S.Input name="celular" placeholder="Informe o celular"/>
            </S.InputGroup>
          </S.InputContent>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/agendamento/data-calendario")}>Continuar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}