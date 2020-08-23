import React from "react";

const Counter = ({ count, increment, decrement }) => (
  <>
    <div>{count}</div>
    <button onClick={() => increment(1)}>+1</button>
    <button onClick={() => increment(10)}>+10</button>
    <br />
    <button onClick={() => decrement(1)}>-1</button>
    <button onClick={() => decrement(10)}>-10</button>
  </>
);

export default Counter;
