import Routes from './routes';
import * as S from './styles';

import { NavigateProvider } from './Context/NavigateContext';
import { UserProvider } from './Context/UserContext';

export default function App() {
  return (
    <S.Container>
      <S.Content>
        <UserProvider>
          <NavigateProvider>
            <Routes />
          </NavigateProvider>
        </UserProvider>
      </S.Content>
    </S.Container>
  )
}
