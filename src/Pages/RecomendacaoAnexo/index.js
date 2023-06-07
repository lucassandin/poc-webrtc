import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import warning from "../../Assets/warning.svg";

import * as S from './styles';

export default function RecomendacaoAnexo() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Title>Legal, agora vamos precisar de uma foto de seus documentos.</S.Title>

      <S.Warning>
        <S.Img src={warning} alt="warning" />

        <div>
          Importante
        </div>
      </S.Warning>

      <S.Span>
        <ol>
          <li>Posicione seu documento dentro da marcação.</li>
          <li>Esteja em um lugar com boa iluminação.</li>
        </ol>
      </S.Span>
      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/anexoDocumento-frente`)}>Estou pronto</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}