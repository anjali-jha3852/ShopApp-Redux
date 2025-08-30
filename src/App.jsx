import Navbar from "./Components/Navbar"
import{Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import  Cart  from "./Pages/Cart";
import "./App.css"


const App = () => {
  
  return (<div>
    <div className="bg-slate-900 ">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
    </Routes>
  </div>)
  
  
};

export default App
