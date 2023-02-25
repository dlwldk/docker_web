//Counter.jsx
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Counter = () => {
  const [count, setCount] = useState("");
  const [message, setMessage] = useState("");

  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };
  const onDecrease = () => {
    setCount(prevCount => prevCount - 1);
  };

  useEffect(() => {
    fetch('/get')
        .then(response =>
          response.text().then(function(text){
            console.log("text 안에 데이터 = " + text);
          })
          )
        .then(message => {
          setMessage(message);
        })
        .catch((error) => console.log("ee: " + error))
  }, [])


  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <h1>{message}</h1>
      <h1>??</h1>
    </>
  );
};

export default Counter;