"use client";
import { useState, useReducer } from "react";

function reducer(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// EXERCISE #1

export default function Reducer() {
  //USESTATE
  const [value, setValue] = useState(0);

  function increment() {
    setValue((pre) => pre + 1);
  }
  function decrement() {
    setValue((pre) => pre - 1);
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function incrementRed() {
    dispatch({ type: "increment" });
  }

  //   EXERCISE #1

  return (
    <main className="flex items-center gap-8 my-4 flex-col">
      <div className="flex justify-center items-center gap-8">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-blue-300 px-6 py-2"
        >
          --
        </button>
        <p className="font-black text-xl">{state.count}</p>
        <button
          onClick={() => incrementRed()}
          className="bg-blue-300 px-6 py-2"
        >
          +
        </button>
      </div>
    </main>
  );
}
