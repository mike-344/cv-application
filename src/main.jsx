import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PracApp } from './PracApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PracApp />
  </StrictMode>,
)
