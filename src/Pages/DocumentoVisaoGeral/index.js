import React, { useEffect } from "react";
import { useNavigateContext } from "../../Context/NavigateContext";
import { useNavigate } from "react-router-dom";

import frontDocument from "../../Assets/front-document-no-border.png";
import backDocument from "../../Assets/back-document-no-border.png";

import olho from "../../Assets/olho.png";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";

import * as S from "../../Components/styles/styles";
import * as SS from "./styles";

export default function DocumentoVisaoGeral() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true);
  });

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <S.Title>Confira as capturas</S.Title>
        </S.Row>
        <S.Row>
          <S.Span>
            Caso não tenha ficado bom, sinta-se a vontade de refazer as fotos e
            nos enviar!
          </S.Span>
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
