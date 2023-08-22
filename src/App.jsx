import image from "./photo-1518780664697-55e3ad937233.avif"
function App() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
        <div>
          <img src={image} className="hidden w-full h-screen object-cover sm:block bg-gray-600 rounded-2xl" alt="" />
        </div>
        <div className=" flex flex-col  justify-center sm:bg-slate-600">
          <form className="max-w-[400px] w-full mx-auto bg-gray-200 p-8 px-8 rounded-lg" >
            <div>
              <h2 className=" flex text-2xl dark:text-white justify-center">Sign in</h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="login" className="font-bold">Login</label>
              <input type="text" name="login" className="rounded-md mb-4 p-2 focus:border-blue-500 focus:bg-blue-200"
                placeholder="Enter your username or email "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-bold">Password</label>
              <input type="password" className="rounded-md mb-4 p-2 focus:border-blue-500 focus focus:bg-blue-200"
                placeholder="Enter your your password" />
            </div>
            <div className=" flex justify-between text-gray-500 py-4">
              <p className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </p>
              <p>Forgot Password</p>
            </div>
            <button className="w-full p-2 bg-blue-500 rounded-lg shadow-xl hover:bg-blue-700g  ">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
