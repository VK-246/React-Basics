import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//useState propogates the counter and re-renders the component when the state changes
  let [counter,setCounter] = useState(0);

  // let counter = 0;
   const addValue = () =>{
    // counter = counter+1;
    if(counter === 20){
      alert("value cannot be greater than 20");
      return;
    }
    setCounter(counter+1);
    console.log("Clicked",counter);
  }

  const removeValue = () => {

    if(counter === 0){
      alert("value cannot be less than 0");
      return;
    }

    setCounter(counter-1);
    console.log("Clicked",counter);
  }

  return (
    <>
    <h1>Bhakti aur Code</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick = {addValue} >Increment {counter}</button>
    <br />
    <button onClick={removeValue}>Decrement {counter}</button>
    <footer>{counter}</footer>
    </>
  )
}

export default App
