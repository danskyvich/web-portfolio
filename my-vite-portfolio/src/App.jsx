import './index.css'
import Home from "./pages/home/index.jsx"
import Resume from "./pages/resume/resume.jsx"
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return <div>
      <Routes>
        <Route path="*/web-portfolio" element={<Home/>}/>
        <Route path="*/resume" element={<Resume/>}/>
      </Routes>
  </div>
}
