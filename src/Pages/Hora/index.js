import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import * as S from './styles';

export default function Hora() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Title>Agora escolha o horário para o seu agendamento:</S.Title>
      <S.InputContent>
        <S.InputGroupd>
          <S.Input type="check" name="hora" placeholder="12:00" readOnly />
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Input type="check" name="hora" placeholder="12:30" readOnly />
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Input type="check" name="hora" placeholder="13:00" readOnly />
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Input type="check" name="hora" placeholder="13:30" readOnly />
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Input type="check" name="hora" placeholder="14:00" readOnly />
        </S.InputGroupd>

        <S.InputGroupd>
          <S.Input type="check" name="hora" placeholder="14:30" readOnly />
        </S.InputGroupd>
      </S.InputContent>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/permissao`)}>Continuar</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}