import CoreProvider from '@providers';

import Routes from './Routes';
import './i18n';

const App = () => (
  <CoreProvider>
    <Routes />
  </CoreProvider>
);

export default App;
