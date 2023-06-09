import React, { useEffect  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import Content from "../../Components/Content";

import DocumentShape from "../../Assets/shape/documento.svg";
import * as S from '../../Components/styles/styles';

export default function AnexoDocumentoFrente() {
  const navigate = useNavigate();
  const { setHeaderBack, setIsOverlay, setTitleHeader, setBackgroundColor } = useNavigateContext();

  const handleNavigate=() => {
    navigate("/agendamento/documento-verso")
  }

  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
    handleNavigate()
  }

  useEffect(() => {
    setHeaderBack(false)
    setIsOverlay("true")
    setBackgroundColor("false");
    setTitleHeader("Frente do documento")

    return () => {
      setIsOverlay("false")
      setTitleHeader("")
    }
  })

  return (
    <>
      {/* central content */}
      <Content style={{
        overflow: "hidden"
      }}>
        <S.Row>
          <S.Column>
            <S.ValidateShape src={DocumentShape} alt="Documento shape" />
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