import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Buton from "./Buton";
import DiceGame from "./baucua";
import NotFound from "./404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<Buton />} />
        <Route path="/baucua" element={<DiceGame />} />
        <Route path="*" element={<NotFound />} />

        
      </Routes> 
    </BrowserRouter>
  );
}



