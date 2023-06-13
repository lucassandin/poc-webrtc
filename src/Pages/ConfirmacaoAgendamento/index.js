import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";
import HomeComponent from "../../Components/Home";

import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function ConfirmacaoAgendamento() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <HomeComponent>
      {/* central content */}
      <Content>
        <S.Row>
          <S.Title>Confirmação de agendamento</S.Title>
        </S.Row>

        <div style={{ marginTop: "1rem"}}></div>

        <SS.Contorno>
            <S.Row>
              <S.Column style={{ margin: "1rem"}}>
                <SS.Div>
                  <S.Label>CPF</S.Label>
                </SS.Div>
                <SS.Div>
                  <S.Text>235*******893</S.Text>
                </SS.Div>
              </S.Column>
            </S.Row>
          </SS.Contorno>
          
          <SS.Contorno>
            <S.Row>
              <S.Column style={{ margin: "1rem"}}>
                <SS.Div>
                  <S.Label>CELULAR</S.Label>
                </SS.Div>
                <SS.Div>
                  <S.Text>(31) 98526-4057</S.Text>
                </SS.Div>
              </S.Column>
            </S.Row>
          </SS.Contorno>

          <SS.Contorno>
            <S.Row>
              <S.Column style={{ margin: "1rem"}}>
                <SS.Div>
                  <S.Label>Data</S.Label>
                </SS.Div>
                <SS.Div>
                  <S.Text>26/02/2023</S.Text>
                </SS.Div>
              </S.Column>
              <S.Column style={{ margin: "1rem"}}>
                <SS.Div>
                  <S.Label>Hora</S.Label>
                </SS.Div>
                <SS.Div>
                  <S.Text>13:30</S.Text>
                </SS.Div>
              </S.Column>
            </S.Row>
          </SS.Contorno>

          <SS.Contorno>
            <S.Row>
              <S.Column style={{ margin: "1rem"}}>
                <SS.Div>
                  <S.Label>Reconhecimento facial</S.Label>
                </SS.Div>
                <SS.Div>
                  <S.Text>Ok</S.Text>
                </SS.Div>
              </S.Column>
            </S.Row>
          </SS.Contorno>

          <SS.Contorno>
            <S.Row>
              <S.Column style={{ margin: "1rem"}}>
                <SS.Div>
                  <S.Label>Documentos</S.Label>
                </SS.Div>
                <SS.Div>
                  <S.Text>Ok</S.Text>
                </SS.Div>
              </S.Column>
            </S.Row>
          </SS.Contorno>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth={true} onClick={() => navigate("/")}>OK</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </HomeComponent>
  )
}