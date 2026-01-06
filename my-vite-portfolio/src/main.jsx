import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics mode='production'/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
