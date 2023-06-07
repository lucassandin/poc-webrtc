import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import * as S from './styles';

export default function ConfirmacaoAgendamento() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Title>Confirmação de agendamento</S.Title>


      <S.Contorno>
        <S.Row>
          <S.Label>CPF</S.Label>
          <S.Text>235*******893</S.Text>
        </S.Row>

        <S.Row>
          <S.Label>CELULAR</S.Label>
          <S.Text>(31) 98526-4057</S.Text>
        </S.Row>

        
        <div style={{
          borderTop: "1px solid #dedede",
          padding: "1rem 0 1rem 1rem",
          display: "inherit",
          gap: "4rem"
        }}>
          <S.Column>
            <S.Label>Data</S.Label>
            <S.Text>26/02/2023</S.Text>
          </S.Column>
          <S.Column>
            <S.Label>Hora</S.Label>
            <S.Text>13:30</S.Text>
          </S.Column>
        </div>
          
        <S.Row>
          <S.Label>Reconhecimento facial</S.Label>
          <S.Text>Ok</S.Text>
        </S.Row>

        <S.Row>
          <S.Label>Documentos</S.Label>
          <S.Text>Ok</S.Text>
        </S.Row>
      </S.Contorno>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/seja-bem-vindo`)}>OK</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}