import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './Header.tsx'
import './index.css'
import About from './Link-Pages/About.tsx'
import Header from './Header.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<main/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </Router>
    </StrictMode>,
)
