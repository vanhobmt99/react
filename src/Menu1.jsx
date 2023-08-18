
import image from "./assets/images/image.jpg";
function Menu1 () 
{

    return (
    <>
    <div className="flex items-center justify-center h-screen  bg-white">
        <div className="bg-slate-500 p-2 mx-4 rounded-3xl">
          <div className="flex flex-col md:flex-row-reverse rounded-l-xl">
            <img
              src={image}
              className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform delay-200 hover:scale-105 hover:rounded-xl"
              alt="Sample"
            />

            <div className="p-8 md:p-12">
              <h2 className="font-serif text-xl font-medium text-center text-white md:text-left ">
                Get diet and fitness tips in your inbox
              </h2>

              <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-center ">
                The best tips for diet, exercise and lifestyle delivered
                straight
              </p>

              <div className=" flex flex-col mt-5 spac-y-4 md:space-x-10 md:flex-row md:space-y-0">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 rounded-md		
                   placeholder:text-xs placeholder:text-center md:text-left 
                   placeholder:md:text-left focus:outline-none
                  hover:bg-zinc-600 "
                ></input>
                <button className="px-5 py-3 text-center rounded-md text-zinc-800 bg-lime-500 hover:text-white duration-700 font-bold ">
                  Scribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default Menu1;