import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import Content from "../../Components/Content";

import * as S from '../../Components/styles/styles';

export default function AnexoDocumentoVerso() {
  const navigate = useNavigate();
  const { setHeaderBack, setIsOverlay } = useNavigateContext();

  const handleNavigate=() => {
    navigate("/agendamento/documento-visao-geral")
  }

  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
    handleNavigate()
  }

  useEffect(() => {
    setHeaderBack(true)
    setIsOverlay(true)

    return () => {
      setIsOverlay(false)
    }
  })

  return (
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <S.Column>
            <Camera
              onTakePhoto={ (dataUri) => { handleTakePhoto(dataUri); } }
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              idealResolution={{width: 640, height: 480}}
              imageType={IMAGE_TYPES.JPG}
              imageCompression={0.97}
              isMaxResolution={true}
              isImageMirror={false}
              isSilentMode={false}
              isDisplayStartCameraError={true}
              isFullscreen={true}
              sizeFactor={1}
            />
          </S.Column>
        </S.Row>
      </Content>
    </>
  )
}