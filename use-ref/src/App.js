import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const renderCnt = useRef(0);
  const inputRef = useRef();
  const prevName = useRef("");

  useEffect(() => {
    renderCnt.current = renderCnt.current + 1;
  })

  useEffect(() => {
    prevName.current = name;
  }, [name])

  const focus = () => {
    inputRef.current.focus();
  }

  
  return (
    <>
      <input ref={inputRef} onChange={e => setName(e.target.value)}></input>
      <div>My name is { name }</div>
      <div>My previous name is { prevName.current }</div>
      <div>{renderCnt.current}</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}


export default App;
