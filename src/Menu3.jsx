import headphone from "./headphone.png";
import weight from "./weight.png";
import heart from "./heart.png";
function Menu3() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="flex flex-col p-6 m-3 space-y-10 bg-white  rounded-2xl shadow-2xl md:flex-row md:space-x-10 md:m-0 md:p-16">
          <div>
            <img
              src={headphone}
              alt=""
              className="mx-auto w-60 hover:scale-105  duration-200"
            />
          </div>
          <div className="flex flex-col space-y-6"></div>
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left ">
            <div>
              <div className="inline  px-1 py-1 text-sm text-white bg-black  rounded-full md:text-left ">
                Free shipping
              </div>
            </div>

            <div className="max-w-sm text-2xl font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            <div className="flex flex-col mb-4 space-y-6 text-center md:text-left">
              <div className="inline-flex">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold ">$599</p>
              </div>
     
              <p className="text-sm text-slate-500 ">
                This offer is valid until April 3rd or as long stock last!{" "}
              </p>
              <div className="group">
                <button
                  className="w-full bg-blue-700 text-white border-b-blue-700 rounded-lg group-hover-t-8
            group-hover:border-t-blue-700 group-hover:shadow-lg"
                >
                  <div className="px-8 py-4 bg-blue- round-lg">Add to cart</div>
                </button>
              </div>

              <div className=" flex items-center  space-x-2 group md:justify-center">
                <div className="w-3 h-3 duration-150 bg-green-400 rounded-full group-hover:animate-pulse"></div>
                <div className="text-base font-semibold">50+ pcs. in stock</div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 md:space-x-4 md:flex-row md:space-y-0  ">
              <button
                className="flex item-center justify-center py-2 px-5 space-x-2 border-2 border-gray-500 rounded-lg shadows-sm 
              hover:bg-opacity-30 hover:shadow-lg
              hover :-transalate-y-0.5 transalate-y-0.5 duration-200"
              >
                <img src={weight} alt="" className="w-8 " />
                <span>Buy Now</span>
              </button>

              <button
                className="flex item-center justify-center py-2 px-5 space-x-2 border-2 border-gray-500 rounded-lg shadows-sm 
              hover:bg-opacity-30 hover:shadow-lg
              hover :-transalate-y-0.5 transalate-y-0.5 duration-200"
              >
                <img src={heart} alt="" className="w-8 " />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Menu3;




