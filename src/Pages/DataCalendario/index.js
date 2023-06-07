import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import * as S from './styles';

export default function DataCalendario() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Title>Escolha uma data para seu agendamento :</S.Title>
      <S.InputContent>
        <S.InputGroupd>
          <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
        </S.InputGroupd>
      </S.InputContent>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/hora`)}>Continuar</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}