import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Prac } from './prac.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prac />
  </StrictMode>,
)
