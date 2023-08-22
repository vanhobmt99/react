import image from "./photo-1518780664697-55e3ad937233.avif";


function Login() {

  function login() {
    console.log("login");
  }
  function register() {
    console.log("register");
  }
  return (
    
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
        <div className="hidden sm:block">
          <img
            src={image}
            className="w-full h-screen object-cover bg-gray-600 rounded-2xl"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center sm:bg-slate-600">
          <form className="max-w-[400px] w-full mx-auto bg-gray-200 p-8 px-8 rounded-lg">
            <div>
              <h2 className="flex text-2xl dark:text-white justify-center">
                Sign in
              </h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="login" className="font-bold mb-2">
                Login
              </label>
              <input
                type="text"
                name="login"
                className="rounded-md mb-4 p-2 focus:border-blue-500 focus:bg-blue-200 hover:sca"
                placeholder="Enter your username or email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="rounded-md mb-4 p-2 focus:border-blue-500 focus focus:bg-blue-200 hover:scale-105"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between text-gray-500 py-4">
              <p className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </p>
              <p>Forgot Password</p>
            </div>
            <div className="flex flex-col md:flex-row ">
              <button className="w-full p-2 bg-green-500 rounded-lg shadow-xl hover:bg-blue-700g my-2 md:mx-3 font-bold" onClick={login}>
                Login
              </button>
              <button className="w-full p-2 bg-red-500 rounded-lg shadow-xl hover:bg-red-700g my-2 md:mx-3 font-bold" onClick={register}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

  );
}

export default Login;
