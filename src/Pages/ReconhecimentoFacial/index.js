import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate, useLocation  } from "react-router-dom";
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


import face from "../../Assets/face.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function ReconhecimentoFacial() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setHeaderBack } = useNavigateContext();

  const handleNavigate = () => {
    if (location.pathname === '/chamada-de-video/reconhecimento-facial') {
      navigate("/chamada-de-video/testeconexao")
    } else {
      navigate("/agendamento/recomendacao-anexo")
    }
  }

  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  function handleTakePhotoAnimationDone (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  function handleCameraError (error) {
    console.log('handleCameraError', error);
  }

  function handleCameraStart (stream) {
    console.log('handleCameraStart');
  }

  function handleCameraStop () {
    console.log('handleCameraStop');
  }


  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <>
      {/* central content */}
      <Content>
        <Camera
          onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
          onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
          onCameraError = { (error) => { handleCameraError(error); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.JPG}
          imageCompression = {0.97}
          isMaxResolution = {true}
          isImageMirror = {false}
          isSilentMode = {false}
          isDisplayStartCameraError = {true}
          isFullscreen = {true}
          sizeFactor = {1}
          onCameraStart = { (stream) => { handleCameraStart(stream); } }
          onCameraStop = { () => { handleCameraStop(); } }
        />
        {/* <S.Row>
          <SS.ImagemContent>
            <SS.Img src={face} alt="Face" />
          </SS.ImagemContent>
        </S.Row>
        <S.Row>
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
        </S.Row> */}
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary fullwidth="true"  onClick={handleNavigate}>Enviar</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </>
  )
}