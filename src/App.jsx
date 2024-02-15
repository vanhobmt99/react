import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Buton from "./Buton";
import DiceGame from "./baucua";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<Buton />} />
        <Route path="/baucua" element={<DiceGame />} />

        
      </Routes> 
    </BrowserRouter>
  );
}



