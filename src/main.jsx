import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './assets/components/App/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
