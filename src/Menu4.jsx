import headphone from "./photo-1518780664697-55e3ad937233.avif";
import headphone3 from "./photo-1568605114967-8130f3a36994.avif";
import headphone4 from "./photo-1568605114967-8130f3a36994.avif";
import headphone5 from "./photo-1598228723793-52759bba239c.avif";
import headphone6 from "./photo-1600585154340-be6161a56a0c.avif";




function Menu4() {

  return (
    <>
   

      <div className="flex  items-center justify-center  min-h-screen bg-teal-500">
        <div className="bg-white p-10 m-3 space-y-10 spac shadow-2xl rounded-3xl md:p-50">
          <div className="flex flex-col items-center space-x-5 space-y-3  md:flex-row md:space-y-0 md:mb-24 ">
            <div className="group">
              <a href="#home" className="font-bold">
                Vektor{" "}
              </a>
              <div
                className="mx-2 mt-2 duration-500 border-b-2 
              opacity-0 border-black group-hover:opacity-100"
              ></div>
            </div>

            <div className="group">
              <a href="#home" className="font-bold">
                Illustrations{" "}
              </a>
              <div
                className="mx-2 mt-2 duration-500 border-b-2 
              opacity-0 border-black group-hover:opacity-100"
              ></div>
            </div>

            <div className="group">
              <a href="#home" className="font-bold">
                Images{" "}
              </a>
              <div
                className="mx-2 mt-2 duration-500 border-b-2 
              opacity-0 border-black group-hover:opacity-100"
              ></div>
            </div>

            <div className="group">
              <a href="#home" className="font-bold">
                Icon{" "}
              </a>
              <div
                className="mx-2 mt-2 duration-500 border-b-2 
              opacity-0 border-black group-hover:opacity-100"
              ></div>
            </div>

            <div className="group">
              <a href="#home" className="font-bold">
                Vektor{" "}
              </a>
              <div
                className="mx-2 mt-2 duration-500 border-b-2 
              opacity-0 border-black group-hover:opacity-100"
              ></div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-5 space-x-10 md:flex-row md:space-y-0">
            <div className="flex justify-between border-b">
              <input
                type="text"
                placeholder="Search"
                className="ml-6 border-none md:w-80 placeholder:font-thin  
              focus:outline-none"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24 "
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </button>
            </div>
            <button
              className="py-3 px-14 text-lg font-normal text-white 
            bg-black border border-black rounded-md shadow-2xl 
            duration-200 hover:bg-white hover:text-black "
            >
              Seaerch box
            </button>
          </div>

          <div className="grid gap-x-6 gap-y-10 md:grid-cols-4   ">
            <div className="relative group">
              <img src={headphone} alt="" className="w-72 h-50" />
              <div
                className="absolute bottom-0 left-0 right-0 p-1 px-2
              text-white duration-500 bg-black opacity-0 
              group-hover:opacity-100 bg-opacity-40 w-72 h-50 object-fit: cover"
              >
                <div className="flex  items-center justify-center">
                  <div className="font-normal">
                    <p className="text-sm"> Abstract Painting</p>
                    <p className="text-xs"> 245 like- 35shares</p>
                  </div>

                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img src={headphone} alt="" className="w-72 h-50" />
              <div
                className="absolute bottom-0 left-0 right-0 p-1 px-2
              text-white duration-500 bg-black opacity-0 
              group-hover:opacity-100 bg-opacity-40 w-72 h-50 object-fit: cover"
              >
                <div className="flex  items-center justify-center">
                  <div className="font-normal">
                    <p className="text-sm"> Abstract Painting</p>
                    <p className="text-xs"> 245 like- 35shares</p>
                  </div>

                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img src={headphone} alt="" className="w-72 h-50" />
              <div
                className="absolute bottom-0 left-0 right-0 p-1 px-2
              text-white duration-500 bg-black opacity-0 
              group-hover:opacity-100 bg-opacity-40 w-72 h-50 object-fit: cover"
              >
                <div className="flex  items-center justify-center">
                  <div className="font-normal">
                    <p className="text-sm"> Abstract Painting</p>
                    <p className="text-xs"> 245 like- 35shares</p>
                  </div>

                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img src={headphone3} alt="" className="w-72 h-50 object-fit: cover " />
              <div
                className="absolute bottom-0 left-0 right-0 p-1 px-2
              text-white duration-500 bg-black opacity-0 
              group-hover:opacity-100 bg-opacity-40 w-72 h-50 object-fit: cover"
              >
                <div className="flex  items-center justify-center">
                  <div className="font-normal">
                    <p className="text-sm"> Abstract Painting</p>
                    <p className="text-xs"> 245 like- 35shares</p>
                  </div>

                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img src={headphone} alt="" className="w-72 h-50" />
              <div
                className="absolute bottom-0 left-0 right-0 p-1 px-2
              text-white duration-500 bg-black opacity-0 
              group-hover:opacity-100 bg-opacity-40 w-72 h-50 object-fit: cover"
              >
                <div className="flex  items-center justify-center">
                  <div className="font-normal">
                    <p className="text-sm"> Abstract Painting</p>
                    <p className="text-xs"> 245 like- 35shares</p>
                  </div>

                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={headphone4} alt="" className="w-72 h-50" />
              <div
                className="absolute bottom-0 left-0 right-0 p-1 px-2
              text-white duration-500 bg-black opacity-0 
              group-hover:opacity-100 bg-opacity-40 w-72 h-50 object-fit: cover"
              >
                <div className="flex  items-center justify-center">
                  <div className="font-normal">
                    <p className="text-sm"> Abstract Painting</p>
                    <p className="text-xs"> 245 like- 35shares</p>
                  </div>

                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img src={headphone5} alt="" className="w-72 h-50" />
              <div
                className="absolute bottom-0 left-0 right-0 p-1 px-2
              text-white duration-500 bg-black opacity-0 
              group-hover:opacity-100 bg-opacity-40 w-72 h-50 object-fit: cover"
              >
                <div className="flex  items-center justify-center">
                  <div className="font-normal">
                    <p className="text-sm"> Abstract Painting</p>
                    <p className="text-xs"> 245 like- 35shares</p>
                  </div>

                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img src={headphone6} alt="" className="w-72 h-50" />
              <div
                className="absolute bottom-0 left-0 right-0 p-1 px-2
              text-white duration-500 bg-black opacity-0 
              group-hover:opacity-100 bg-opacity-40 w-72 h-50 object-fit: cover"
              >
                <div className="flex  items-center justify-center">
                  <div className="font-normal">
                    <p className="text-sm"> Abstract Painting</p>
                    <p className="text-xs"> 245 like- 35shares</p>
                  </div>

                  <div className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default Menu4;
