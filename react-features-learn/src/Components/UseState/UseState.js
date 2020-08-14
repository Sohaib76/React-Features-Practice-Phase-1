import React, {useState} from 'react';
import './UseState.css';



function UseState() {

  const [countState,setCount] = useState(()=> 4)
  const [textState, setText] = useState(()=>"click")

  function decrementCount(){
    setCount((prevCount) => prevCount - 1)
    setText('subtract')
  }

  function incrementCount() {

    setCount(prevCount => prevCount + 1)
    setText("add")
    }
  
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{countState}</span>
      <span>{textState}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default UseState;
 