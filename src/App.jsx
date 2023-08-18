import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";

function App() {
  return (
    <>
      <Router>
        <div className="block">
          <div>
            <ul className="App-header  items-center space-x-4 rounded-ml font-bold pt-6 ">
              <div className="flex flex-row space-x-4 justify-center ">
              <li>
                <Link to="/" className="border-2 border-green-800 rounded-2xl px-3 py-1 text-black ">Home</Link>
              </li>
              <li>
                <Link to="/about" className=" border-2 border-green-800 rounded-2xl px-1 py-1 ">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className= " border-2 border-green-800 rounded-2xl px-1 py-1 " >Contact Us</Link>
              </li>
              </div>
              
            </ul>
          </div>

          <Routes>
            <Route exact path="/" element={<Menu1 />}></Route>
            <Route exact path="/about" element={<Menu2 />}></Route>
            <Route exact path="/contact" element={<Menu3 />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
