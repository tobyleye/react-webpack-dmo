import React, { useState, lazy } from "react";

const Heavy = lazy(() => import("./HeavyComponent"));

export default function Home() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <div>
      <span>Hello world {count}</span>
      <button onClick={() => setCount((c) => c + 1)}>click me</button>
      <div>
        <button onClick={() => setShow((cur) => !cur)}>show lorem</button>
      </div>
      {show ? <Heavy /> : null}
    </div>
  );
}
