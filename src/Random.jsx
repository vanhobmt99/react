import React, { useState } from "react";

const Random = () => {
  const [numbers, setNumbers] = useState([]);

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 100);
    setNumbers((previousNumbers) => [...previousNumbers, random]);
    console.log('random ',random);
    console.log(numbers + "numbers");

  };

  const clearNumbers = () => {
    setNumbers([]);
    console.log('clearNumbers');
  };

  const deleteLastNumber = () => {
    console.log('deleteLastNumber' + numbers.at(-1));
    setNumbers((previousNumbers) => previousNumbers.slice(0, -1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="border border-blue-200 rounded-lg p-6 bg-white shadow-lg">
        <h1 className="text-4xl font-extrabold mt-10 text-blue-600">
          Random Number Generator
        </h1>
        <div className="flex flex-col items-center justify-center mt-8 text-lg">
          <div className="space-x-4">
            <button
              className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none"
              onClick={randomNumber}
            >
              Generate Random Number
            </button>
            <button
              className="mb-6 px-6 py-3 bg-gradient-to-r from-red-500 to-indigo-500 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none"
              onClick={clearNumbers}
            >
              Delete Previous Numbers
            </button>
            <button
              className="mb-6 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none"
              onClick={deleteLastNumber}
            >
              Delete Last Number
            </button>
          </div>
          <div className="grid grid-cols-8 gap-2 bg-green-500 p-4 rounded-lg shadow-md">
            {numbers.map((num, index) => (
              <span
                key={index}
                className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full border border-blue-400"   
              >
                {num}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;