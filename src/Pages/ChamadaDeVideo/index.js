import React, { useEffect } from 'react';
import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';

// import api from '../../services/api';
import * as S from './styles';

import { useNavigateContext } from '../../Context/NavigateContext';

export default function ChamadaDeVideo() {
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })
 

  return (
    <S.Content>
      <S.InputContent>
        <S.InputGroupd >

          Video aqui
        </S.InputGroupd>
      </S.InputContent>
    </S.Content>
  );
}
