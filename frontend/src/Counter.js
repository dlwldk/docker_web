//Counter.jsx
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState("");
  const [message, setMessage] = useState("");

  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
    let inc_num = parseInt(count);
    inc_num += 1;
    fetch('/update?count='+inc_num, {
        method: 'POST'
    })
  };

  const onDecrease = () => {
    setCount(prevCount => prevCount - 1);
    let dec_num = parseInt(count);
    dec_num -= 1;
    fetch('/update?count='+dec_num, {
        method: 'POST'

    })
  };

  useEffect(() => {
    fetch('/get')
        .then(response =>
          response.text().then(function(text){
            console.log(text);
            text *= 1;
            setCount(text);
          })
          )
        .catch((error) => console.log("ee: " + error))
  }, [])


  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
};

export default Counter;