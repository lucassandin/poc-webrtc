import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import backDocument from "../../Assets/backdocument.png";

import * as S from './styles';

export default function AnexoDocumentoVerso() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.ImagemContent>
        <S.Contorno>
          <S.Img src={backDocument} alt="Documento verso" />
          <S.Tipo>
            Verso
          </S.Tipo>
        </S.Contorno>
      </S.ImagemContent>

      <S.Span>
        <div>
        Importante:
        </div>
        Posicione seu documento dentro da marcação.
      </S.Span>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/documento-visao-geral`)}>Enviar</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}