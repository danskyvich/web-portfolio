import "./index.css"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/main/index"
import AboutMe from "./pages/about-me/about-me"

const App = () => {
    return ( 
    <Routes>
        <>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about-me" element={<AboutMe/>}/>
        </>
    </Routes> )
}

export default App;
