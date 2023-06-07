import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import * as S from './styles';

export default function PreencherDados() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Title>Olá, preencha os campos abaixo:</S.Title>
      <S.InputContent>
        <S.InputGroupd>
          <S.Label>CPF</S.Label>
          <S.Input name="cpf" placeholder="CPF"/>
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Label>NOME</S.Label>
          <S.Input name="nome" placeholder="NOME"/>
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Label>CELULAR</S.Label>
          <S.Input name="celular" placeholder="CELULAR"/>
        </S.InputGroupd>
      </S.InputContent>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/data-calendario`)}>Continuar</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}