import { useState } from "react";
import Button from "../components/Button";

function CounterLayout() {
  //Create a state
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <div>
        <Button label="Decrement" clickHandler={handleDecrement} disabled className="btn-red"/>
        <p>{counter}</p>
        <Button label="Increment" clickHandler={handleIncrement} />
        <Button label="Reset" clickHandler={handleReset} />
      </div>
    </>
  );
}

export default CounterLayout;
