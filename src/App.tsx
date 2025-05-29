import CoreProvider from '@providers';

import Routes from './Routes';
import './i18n';

const App = () => {
  return (
    <CoreProvider>
      <Routes />
    </CoreProvider>
  );
};

export default App;
