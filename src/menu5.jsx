
import facebook from "./facebook.png";
import google from "./google.png";
import headphone from "./photo-1575517111478-7f6afd0973db.avif";
function menu5() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-rose-200">
        <div
          className="relative flex flex-col m-6 space-y-10 bg-white shadown-2xl rounded-2xl 
        md:flex-row md:space-y-0 md:m-0"
        >
          <div className="p-6 md:p-20">
            <h2 className="font-mono mb-5 text-4xl font-bold">Log in</h2>
            <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
              Login to your account to upload or download your files.
            </p>
            <input
              type="text"
              className="w-full p-6 border border-gray-300 rounded-xl
            placeholder:font-sans placeholder:font-light"
              placeholder="Please enter your email address"
            />
            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0 ">
              <div className="font-bold text-cyan-700 text-xl ">
                {" "}
                Forgot Password
              </div>
              <button className="w-full md:w-7/10 flex justify-center items-center p-6 space-x-3 font-bold font-sans text-white rounded-xl shadow-lg px-6 bg-cyan-500 hover:scale-105 hover:bg-cyan-600">
                <span>Next</span>
              </button>
            </div>
            <div className="mt-12 border-b border-b-gray-300"></div>
            <p className="py-6 text-sm font-thin text-left text-gray-400 ">
              Or login with
            </p>
            <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <button
                className="flex items-center justify-center py-2 space-x-3
              border border-gray-300 rounded shadow-sm
              hover:bg-opacity-30 hover:shadow-sm hover:-translate-y-0.5 transition duration-150 
              md:w-1/2"
              >
                <img src={facebook} className="w-9" />
                <span className="font-thin"> Facebook</span>
              </button>

              <button
                className="flex items-center justify-center py-2 space-x-3
              border border-gray-300 rounded shadow-sm
              hover:bg-opacity-30 hover:shadow-sm hover:-translate-y-0.5 transition duration-150 
              md:w-1/2"
              >
                <img src={google} className="w-9" />
                <span className="font-thin"> Google</span>
              </button>
            </div>
          </div>

          <img
            src={headphone}
            alt=""
            className="w-[430px]  hidden md:block md:rounded-xl"
          />
        </div>
      </div>
    </>
  );
}
export default menu5;
