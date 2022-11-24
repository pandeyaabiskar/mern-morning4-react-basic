import { useState, useEffect } from "react";
import Button from "../components/Button";

function CounterLayout() {
  //Create a state
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //Lifecycle methods
  //Runs everytime
  // useEffect(() => {
  //   console.log("Component initialized and mounted");
  // })

  //Runs only the first time when component is loaded
  // useEffect(() => {
  //   console.log("Component initialized and mounted");

  // //Runs when component is unmounted
  //   return () => {
  //     console.log("Component unmounted")
  //   }
  // }, [])

  //Only runs when counter is updated
  // useEffect(() => {
  //   console.log("Counter updated")
  // }, [counter]);
  

  const handleIncrement = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  const handleReset = () => {
    setCounter2(0);
  };

  //2nd counter
  const handleIncrement2 = () => {
    setCounter2(counter2 + 1);
  };
  const handleDecrement2 = () => {
    setCounter2(counter2 - 1);
  };

  const handleReset2 = () => {
    setCounter2(0);
  };

  return (
    <>
      <div>
        <h1>1st Counter</h1>
        <Button label="Decrement" clickHandler={handleDecrement} className="btn-red"/>
        <p>{counter}</p>
        <Button label="Increment" clickHandler={handleIncrement} />
        <Button label="Reset" clickHandler={handleReset} />
      </div>

      <div>
        <h1>2nd Counter</h1>
        <Button label="Decrement" clickHandler={handleDecrement2} className="btn-red"/>
        <p>{counter2}</p>
        <Button label="Increment" clickHandler={handleIncrement2} />
        <Button label="Reset" clickHandler={handleReset2} />
      </div>
    </>
  );
}

export default CounterLayout;
