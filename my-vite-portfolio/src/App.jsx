import './index.css'
import Home from "./pages/home/index.jsx"
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return <div>
      <Routes>
        <Route path="*" element={<Home/>}/>
      </Routes>
  </div>
}
