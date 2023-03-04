"use client";
import React, { useReducer } from "react";
import items from "../data/items.json";

const ACTION = {
  ADDTO: "addto",
  ADD: "add",
  MINUS: "minus",
  REMOVE: "remove",
  EMPTY: "empty",
};

type Item = {
  name: string;
  img: string;
  price: number;
  quantity: number;
};

type Action = {
  type: string;
  payload?: {
    name: string;
    img?: string;
    price?: number;
  };
};

function cartReducer(state: Item[], action: Action) {
  switch (action.type) {
    case ACTION.ADDTO:
      if (state.find((s) => s.name == action.payload!.name)) return state;
      return [
        {
          name: action.payload!.name,
          img: action.payload!.img || "",
          price: action.payload!.price || 0,
          quantity: 1,
        },
        ...state,
      ];

    case ACTION.ADD:
      return state.map((s) => {
        if (s.name === action.payload!.name) s.quantity++;
        return s;
      });

    case ACTION.MINUS:
      return state.map((s) => {
        if (s.name === action.payload!.name) s.quantity--;
        return s;
      });

    case ACTION.REMOVE:
      return state.filter((s) => s.name !== action.payload!.name);

    case ACTION.EMPTY:
      return [];

    default:
      return state;
  }
}

export default function CartStuff() {
  const [state, dispatch] = useReducer(cartReducer, [] as Item[]);
  const cartTotal = state.reduce((acc, s) => {
    console.log(s.price, s.quantity);
    return Math.round(acc + s.price * s.quantity);
  }, 0);

  return (
    <section className="mx-auto text-center">
      <h2 className="font-bold uppercase">CartReducer</h2>
      <div className="flex justify-around gap-4">
        {items.map((item) => {
          return (
            <button
              key={item.id}
              className="py-2 w-24 bg-slate-400 rounded-md hover:bg-slate-200 hover:text-slate-800"
              onClick={() =>
                dispatch({
                  type: ACTION.ADDTO,
                  payload: {
                    name: item.name,
                    img: item.imgUrl,
                    price: item.price,
                  },
                })
              }
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col my-8 gap-4">
        {state.map((s, i) => {
          return (
            <article
              key={i}
              className="flex h-12 items-center bg-gray-300 px-2 gap-4 rounded-md"
            >
              <p className="flex-1">{s.name}</p>
              <p className="flex-1">{s.quantity}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTION.ADD,
                    payload: {
                      name: s.name,
                    },
                  })
                }
                className="py-2 flex-[0.5] w-full bg-slate-200 hover:bg-slate-800 hover:text-slate-200 uppercase"
              >
                add
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTION.MINUS,
                    payload: {
                      name: s.name,
                    },
                  })
                }
                className="py-2 flex-[0.5] w-full bg-slate-200 hover:bg-slate-800 hover:text-slate-200 uppercase"
              >
                remove
              </button>
            </article>
          );
        })}
      </div>
      <p className="uppercase">total: {cartTotal}</p>
      <button
        onClick={() =>
          dispatch({
            type: ACTION.EMPTY,
          })
        }
        className="py-2 w-24 bg-slate-400 rounded-md hover:bg-slate-200 hover:text-slate-800 uppercase"
      >
        empty
      </button>
    </section>
  );
}
