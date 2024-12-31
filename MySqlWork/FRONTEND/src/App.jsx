import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
