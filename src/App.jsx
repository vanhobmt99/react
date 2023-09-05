
import dummy1 from "./dummy_1.jpg";
import dummy2 from "./dummy_2.jpg";
import dummy3 from "./dummy_3.jpg";

function App() {
  return (
    <div>
      <div className="text-4xl text-center bg-green-700 mb-2">Book for dummy</div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="m-10 p-5 bg-slate-100 rounded-lg">
          <img src={dummy1} alt="dummy1" />
          <h1 className="text-center m-2 font-bold">Book for excel </h1>
          <h3 className="text-center">Reading very good</h3>
        </div>

        <div className="m-10 p-5 bg-slate-100 rounded-lg">
          <img src={dummy2} alt="dummy2" />
          <h1 className="text-center m-2 font-bold">Book for excel </h1>
          <h3 className="text-center">Reading very good</h3>
        </div>

        <div className="m-10 p-5 bg-slate-100 rounded-lg">
          <img src={dummy3} alt="dummy3" />
          <h1 className="text-center m-2 font-bold">Book for excel </h1>
          <h3 className="text-center">Reading very good</h3>
      
        </div>
      </div>
    </div>
  );
}

export default App;
