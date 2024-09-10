import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Header.tsx'
import './index.css'
import Header from './Header.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Header />
    </StrictMode>,
)
