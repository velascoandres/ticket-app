import React from 'react';
import { RouterPage } from './pages/RouterPage';
import 'antd/dist/antd.css';
import { UiProvider } from './context/UiContext';

function App() {
  return (
    <>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </>
  );
}

export default App;
