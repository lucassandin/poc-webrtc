import Routes from './routes';

import { NavigateProvider } from './Context/NavigateContext';
import { UserProvider } from './Context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <NavigateProvider>
        <Routes />
      </NavigateProvider>
    </UserProvider>
  )
}
