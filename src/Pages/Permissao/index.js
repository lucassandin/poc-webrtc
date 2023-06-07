import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import location from "../../Assets/location.svg";

import * as S from './styles';

export default function Permissao() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Location>
        <img src={location} alt="Location" />
      </S.Location>
      <S.Title>Permitir que o app tenha acesso a localização do dispositivo?</S.Title>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/recomendacao-facial`)}>Dar permissão</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}