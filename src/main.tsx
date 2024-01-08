import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StageContextProvider } from './context/StageContext.tsx';
import { SettingsContextProvider } from './context/SettingsContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SettingsContextProvider>
      <StageContextProvider>
        <App />
      </StageContextProvider>
    </SettingsContextProvider>
  </React.StrictMode>,
);
