import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import frontDocumet from "../../Assets/frontdocument.png";

import * as S from './styles';

export default function AnexoDocumentoFrente() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.ImagemContent>
        <S.Contorno>
          <S.Img src={frontDocumet} alt="Documento frontal" />
          <S.Tipo>
            Frente
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
        <S.Button onClick={() => navigate(`/agendamento/anexoDocumento-verso`)}>Continuar</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}