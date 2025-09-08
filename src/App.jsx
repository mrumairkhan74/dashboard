import Profile from "./components/form/Profile"
import Home from "./components/Home"
import Layout from "./Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
