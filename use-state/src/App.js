import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((prev) => {
      return prev + 1;
    })
  }

  const dec = () => {
    setCount((prev) => {
      return prev - 1;
    })
  }

  return (
    <>
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
    </>
  );
}

export default App;
