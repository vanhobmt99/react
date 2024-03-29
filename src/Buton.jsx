import { useReducer } from "react";
import abc from "./photo-1518780664697-55e3ad937233.jpg";
import { Link } from "react-router-dom";

function Buton() {
  const reducer = (count, action) => {
    switch (action.type) {
      case "Tang":
        return count + 1;
      case "Giam":
        return count - 1;
      case "Clear":
        return 0;
      case "nhandoi":
        return count * 2;
      default:
        return count;
    }
  };
  const tang = () => {
    dispatch({ type: "Tang" });
  };
  const giam = () => {
    dispatch({ type: "Giam" });
  };
  const clear = () => {
    dispatch({ type: "Clear" });
  };
  const nhandoi = () => {
    dispatch({ type: "nhandoi" });
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row h-screen">

        <div className="mx-20 mb-5">
          <h1 className="text-4xl font-bold mb-4 text-center">Count {count}</h1>
          <div className="flex space-x-10">
            <button
              className="px-7 py-2 bg-blue-500 text-white rounded-lg"
              onClick={nhandoi}
            >
              x2
            </button>

            <button
              className="px-5 py-3 bg-red-500 text-white rounded-lg"
              onClick={tang}
            >
              UP
            </button>

            <button
              className="px-5 py-2 bg-green-500 text-white rounded-lg"
              onClick={clear}
            >
              Clear
            </button>
            <button
              className="px-5 py-2 bg-yellow-500 text-white rounded-lg"
              onClick={giam}
            >
              DOWN
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src={abc} className="rounded-xl w-1/2 sm:w-full sm:justify-center sm:items-center" alt="example" />
        </div>

      </div>
      
      <div className="font-bold text-center mt-10 ">
        <h1 ><Link to="/" className="bg-indigo-500 p-2  ">Button</Link></h1>
      </div>
    </div>
  );
}

export default Buton;