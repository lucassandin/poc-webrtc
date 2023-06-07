import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import frontDocument from "../../Assets/front-document-no-border.png";
import backDocument from "../../Assets/back-document-no-border.png";

import * as S from './styles';

export default function DocumentoVisaoGeral() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.ImagemContent>
        <S.Contorno>
          <S.Div>Frente:</S.Div>
          <S.Img src={frontDocument} alt="Documento frente" />
        </S.Contorno>

        <S.Contorno>
          <S.Div>Verso:</S.Div>
          <S.Img src={backDocument} alt="Documento verso" />
        </S.Contorno>
      </S.ImagemContent>

      <S.Span>
        <div>
        Importante:
        </div>
        Posicione seu documento dentro da marcação.
      </S.Span>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/documentos-recebidos`)}>Enviar</S.Button>
        <S.Button onClick={() => navigate(`/agendamento/anexoDocumento-frente`)}>Refazer</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}