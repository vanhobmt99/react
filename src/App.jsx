import { useReducer } from "react";


function App() {
  const reducer = (count, action) => {
    switch (action.type) {
      case 'Tang':
        return count + 1;
      case 'Giam':
        return count - 1;
      case 'Clear':
        return 0;
      case 'nhandoi':
        return count*2;
      default:
        return count;
    }
  }
const tang = () => {
  dispatch({type:'Tang'})
};
const giam = () => {
  dispatch({type:'Giam'})
};
const clear = () => {
  dispatch({type:'Clear'})
};
  const nhandoi = () => {
  dispatch({type:'nhandoi'})
};
  
  
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Count {count}</h1>
      <div className="mt-4 space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg " onClick={nhandoi}>x2</button>
        
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={tang}>Tang</button>
        
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg" onClick={clear}>Clear</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg" onClick={giam}>Giam</button>
      </div>
    </div>
  );
}

export default App;
