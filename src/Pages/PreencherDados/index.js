import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";
import { useMask } from 'react-mask-field';

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';

export default function PreencherDados() {
  const navigate = useNavigate();
  const { setHeaderBack, setBackgroundColor } = useNavigateContext();
  const refCPF = useMask({ mask: '___.___.___-__', replacement: { _: /\d/ } });
  const refPHONE = useMask({ mask: '(__) _____-____', replacement: { _: /\d/ } });

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
              <S.Input ref={refCPF} name="cpf" inputMode='numeric' placeholder="Digite seu CPF"/>
              {/* <S.Input type="number" inputMode='numeric' pattern="[0-9]*" name="cpf" placeholder="Digite seu CPF" /> */}
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>Nome</S.Label>
              <S.Input type="text" name="nome" placeholder="Informe o nome"/>
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>Celular</S.Label>
              <S.Input ref={refPHONE} name="celular" inputMode='numeric' placeholder="Informe o celular"/>
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