import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './Routes.jsx'
import EstilosGlobais from './componentes/EstilosGlobais/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <EstilosGlobais />
    <AppRoutes />
  </>
)
