import Blog from "./pages/Blog"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contactpage from "./pages/Contactpage"
import Services from "./pages/Services"
import Singalblogpage from "./pages/Singalblogpage"
import Deshborad from "./components/Deshborad"
import Login from "./components/Login"

const App = () => {
  return (
<>

<Routes >
  <Route path="/" element={<Home/>}/>
  <Route path="/posts"  element={<Blog/>}/>
  <Route path="/post/:id" element={<Singalblogpage/>}/>
  <Route path="/contact" element={<Contactpage/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/deshbord" element={<Deshborad/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="*" element={<h1> page not found</h1>}/>
</Routes>
</>
  )
}

export default App