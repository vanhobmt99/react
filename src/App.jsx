import dummy1 from "./dummy_1.jpg";
import dummy2 from "./dummy_2.jpg";
import dummy3 from "./dummy_3.jpg";
import google from "./google.png";

function App() {
  return (
    <div className="w-4/5 m-auto border-solid border-2 border-sky-500 rounded-xl	">
      <div className=" text-9xl text-green-700 font-bold p-10 flex items-center justify-center">
        <img src={google} alt="Google" className="mr-4" />
        <div className="text-4xl text-center">Book for dummy</div>
      </div>
      <div className="flex flex-col justify-center md:flex-row ">
        <div className="m-10 p-5 bg-slate-100 rounded-lg hover:scale-105  ">
          <img src={dummy1} alt="dummy1" />
          <h1 className="text-center m-2 font-bold">Excel formulas</h1>
        </div>

        <div className="m-10 p-5 bg-slate-100 rounded-lg hover:scale-105 ">
          <img src={dummy2} alt="dummy2" />
          <h1 className="text-center m-2 font-bold">Building a Mobile app </h1>
        </div>

        <div className="m-10 p-5 bg-slate-100 rounded-lg hover:scale-105">
          <img src={dummy3} alt="dummy3" />
          <h1 className="text-center m-2 font-bold">Android App Development</h1>
        </div>
      </div>

      <div>
       <div className="text-4xl text-red-600 text-center font-bold mb-10">About us</div>
      </div>
    </div>
  );
}

export default App;
