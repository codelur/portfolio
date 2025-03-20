import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { BrowserRouter, HashRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
