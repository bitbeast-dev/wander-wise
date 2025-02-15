import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
// import Register from "./pages/Register"
import Login from "./pages/Login"
import isLoggedIn from "./utils/sessionVerifier"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
