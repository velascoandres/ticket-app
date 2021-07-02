import React from 'react';

import { RouterPage } from './pages/RouterPage';
import { UiProvider } from './context/UiContext';
import { SocketProvider } from './context/SocketContext';

import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <>
      <SocketProvider>
        <UiProvider>
          <RouterPage />
        </UiProvider>
      </SocketProvider>
    </>
  );
}

export default App;
