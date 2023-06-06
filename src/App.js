import Routes from './routes';
import * as S from './styles';

import { NavigateProvider } from './Context/NavigateContext';

export default function App() {
  return (
    <S.Container>
      <S.Content>
        <NavigateProvider>
          <Routes />
        </NavigateProvider>
      </S.Content>
    </S.Container>
  )
}
