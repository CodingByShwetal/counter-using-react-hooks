import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0) //for input field
  const [counter, setCounter] = useState() // for counter to be decrease
  const [btn, setBtn] = useState(false) // for enabling counter and check to stop decrement
  let interval=0;

  const handleChange = (e) => {
    console.log('Counter Value')
    setCount(e.target.value);
  }

  const handleClick = () => {
    console.log('Btn Clicked')
    setBtn(true)
    setCounter(count)
    setCount(0);
  }

  useEffect(() => {
    console.log("useEffect");
    if(btn && counter == 0)
        setBtn(false)
    else {
      interval = setInterval(() => {
          setCounter((counter) => counter - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [counter]);

  console.log("render");
  return (
    <div className="App">
      <input type="number" value={btn ? counter : count} onChange={handleChange} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
