import Home from "./pages/Home"
import ImageManipulation from "./pages/ImageManipulation"
import { Routes , Route } from "react-router-dom"

function App() {

  return (
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/image-manipulation" element={<ImageManipulation />}/>
    </Routes>
  )
}

export default App
