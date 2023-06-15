import React from 'react'

import documentoPDF from "../../Assets/simulatepdf.png";
import iconDownload from "../../Assets/icon-download.svg";

import * as S from "../styles/styles"; 
import * as SS from "./styles"; 

export default function Dropzone() {
  return (
    <>
      <S.Row>
        <S.Column style={{
          marginTop: "2rem",
          position: "relative"
        }}>
          <SS.Retangle />
          <SS.ButtonDownloadPDF src={iconDownload} alt="Ícone de download" />
          <SS.PDF src={documentoPDF} alt="PDF" />
        </S.Column>
      </S.Row>
    </>
  )
}
