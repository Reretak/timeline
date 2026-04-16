import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BaseUp from './BaseUp.jsx'
import BaseCenter from './BaseCenter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <BaseUp />
    <BaseCenter />
    </>
  </StrictMode>,
)
