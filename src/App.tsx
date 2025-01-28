import { Header } from '@components';
import CoreProvider from '@providers';

import Routes from './Routes';
import './i18n';

const App = () => (
  <CoreProvider>
    <Header />
    <Routes />
  </CoreProvider>
);

export default App;
