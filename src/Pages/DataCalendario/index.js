import React, { useCallback, useEffect, useState,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';

export default function DataCalendario() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();
  const [datasAtuais, setDataAtuais] = useState([]);

  const handleGenerateData = useCallback(() => {
    const currentDate = new Date();
    // new Date().toLocaleDateString('pt-br', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 

    let dataArray = [];
    for (let i = 0; i <= 10; i++) {
      dataArray.push(
        currentDate.setDate(currentDate.getDate() + 1)
      );
    }
    setDataAtuais(dataArray)
  }, [])

  useEffect(() => {
    setHeaderBack(true)
  })

  useEffect(() => {
    handleGenerateData();
  }, [handleGenerateData])

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <S.Title>Escolha uma data para seu agendamento:</S.Title>
        </S.Row>
        <S.Row>
          <S.InputContent>
            {datasAtuais.map(e => {
              return (
                <S.InputGroup key={e}>
                  
                  <S.Input type="check" name="data" placeholder={new Date(e).toLocaleDateString()} readOnly />
                </S.InputGroup>
              )
            })}
            {/* <S.InputGroup>
              <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
            </S.InputGroup>

            <S.InputGroup>
              <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
            </S.InputGroup>

            <S.InputGroup>
              <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
            </S.InputGroup>

            <S.InputGroup>
              <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
            </S.InputGroup>

            <S.InputGroup>
              <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
            </S.InputGroup>

            <S.InputGroup>
              <S.Input type="check" name="data" placeholder="26/02/2024" readOnly />
            </S.InputGroup> */}
          </S.InputContent>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={() => navigate("/agendamento/hora")}>Continuar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}