import React, { useEffect } from "react";
import { useNavigateContext } from "../../Context/NavigateContext";
import { useNavigate } from "react-router-dom";

import frontDocument from "../../Assets/documents/frente.png";
import backDocument from "../../Assets/documents/verso.png";

import olho from "../../Assets/olho.png";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from "../../Components/styles/styles";
import * as SS from "./styles";

export default function DocumentoVisaoGeral() {
  const navigate = useNavigate();
  const { setHeaderBack, setBackgroundColor } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true);
    setBackgroundColor('true')
  });

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <div
            style={{
              width: '90vw',
            }}
          >
            <S.Title>Confira as capturas</S.Title>
          </div>
        </S.Row>
        <S.Row>
          <div
            style={{
              width: '90vw',
              marginTop: '30px'
            }}
          >
            <S.Span>
              Caso não tenha ficado bom, sinta-se a vontade de refazer as fotos e
              nos enviar!
            </S.Span>
          </div>
        </S.Row>
        <S.Row 
              style={{
                marginTop: '20px'
              }}>
          <S.Column>
            <div
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "5px",
                  justifyContent: "space-between",
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <SS.CardRound />
                <SS.DocumentDesciption>Frente</SS.DocumentDesciption>
                <SS.Olho src={olho} alt="Documento frente" />
              </div>
              <SS.Img src={frontDocument} alt="Documento frente" />
            </div>
          </S.Column>
        </S.Row>

        <S.Row>
          <S.Column>
            <div
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "5px",
                  justifyContent: "space-between",
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <SS.CardRound />
                <SS.DocumentDesciption>Verso</SS.DocumentDesciption>
                <SS.Olho src={olho} alt="Documento verso" />
              </div>
              <SS.Img src={backDocument} alt="Documento verso" />
            </div>
          </S.Column>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonSecondary
              onClick={() => navigate(`/agendamento/documento-frente`)}
            >
              Refazer
            </S.ButtonSecondary>
          </S.Column>
          <S.Column>
            <S.ButtonPrimary
              onClick={() => navigate(`/agendamento/confirmacao-agendamento`)}
            >
              Enviar
            </S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  );
}
