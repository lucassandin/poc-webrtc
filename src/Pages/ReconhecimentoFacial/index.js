import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import face from "../../Assets/face.svg";

import * as S from './styles';

export default function ReconhecimentoFacial() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.ImagemContent>
        <S.Img src={face} alt="Face" />
      </S.ImagemContent>

      <S.Span>
        <div>
        Importante:
        </div>
        <ol>
          <li>Posicione seu rosto dentro da marcação.</li>
          <li>Esteja em um lugar com boa iluminação.</li>
          <li>Caso use óculos, retire por favor!</li>
        </ol>
      </S.Span>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/recomendacao-anexo`)}>Enviar</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}