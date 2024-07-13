import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes.jsx';
import EstilosGlobais from './componentes/EstilosGlobais/index.jsx';
import { VideoProvider } from './context/VideoContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <VideoProvider>
    <EstilosGlobais />
    <AppRoutes />
  </VideoProvider>
);
