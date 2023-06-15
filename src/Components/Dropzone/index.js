import React from 'react'

import documentoPDF from "../../Assets/simulatepdf.png";

import * as S from "../styles/styles"; 
import * as SS from "./styles"; 

export default function Dropzone() {
  return (
    <>
      <S.Row>
        <S.Column style={{
          marginTop: "2rem"
        }}>
          <SS.Retangle />
          <SS.PDF src={documentoPDF} alt="PDF" />
        </S.Column>
      </S.Row>
    </>
  )
}
