"use client";
import React, { useReducer } from "react";

// type Form = [{ email: string; valid: boolean | undefined }];
// const INITIAL_STATE = [{ email: "", valid: undefined }];
const INITIAL_STATE = {
  email: { value: "", valid: undefined },
  cardNumber: { value: "", valid: undefined },
};

const ACTION = {
  UPDATE: "update",
  VALIDATE: "validate",
};

type ACTIONS = {
  type: string;
  payload: {
    name: string;
    value?: string | number;
    isValid?: boolean | undefined;
  };
};

function formReduce(state: typeof INITIAL_STATE, action: ACTIONS) {
  switch (action.type) {
    case ACTION.UPDATE:
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name as keyof typeof state],
          value: action.payload.value,
        },
      };

    case ACTION.VALIDATE:
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name as keyof typeof state],
          valid: action.payload.isValid,
        },
      };

    default:
      return state;
  }
}

export default function FormReducer() {
  const [state, dispatch] = useReducer(formReduce, INITIAL_STATE);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) {
    let newValue: string | undefined;

    if (inputType == "email") newValue = e.target.value;

    if (inputType == "cardNumber") {
      newValue = e.target.value
        .replace(/[^0-9]/gi, "")
        .replace(/(.{4})/gi, "$1 ")
        .trim();
    }

    dispatch({
      type: ACTION.UPDATE,
      payload: {
        name: inputType,
        value: newValue,
      },
    });
  }

  function handleValid(inputType: string) {
    let valid: boolean | undefined;

    if (inputType == "email") {
      const emailRegex = /^\w+([-\.=%+]*\w)*@\w([\.]?\w)*(\.\w{2,4})$/;
      valid = emailRegex.test(state.email.value);
    }

    if (inputType == "cardNumber") {
      const cardRegex = /^[0-9]{4}\s([0-9]{4}\s){2}[0-9]{4}/;
      valid = cardRegex.test(state.cardNumber.value);
    }

    dispatch({
      type: ACTION.VALIDATE,
      payload: {
        name: inputType,
        isValid: valid,
      },
    });
  }

  //   console.log(state);

  return (
    <section className="px-12 py-6 ">
      <h2 className="uppercase font-black">Payment Details</h2>
      <form action="">
        {/* EMAIL */}
        <label htmlFor="email">Email Address</label>
        <div
          className={`${
            state.email.valid === undefined
              ? `border-slate-200`
              : state.email.valid
              ? `border-green-400`
              : `border-red-400`
          } max-w-sm border-solid border-2 rounded-md py-2 px-4 flex`}
        >
          <input
            type="email"
            className="flex-[4] focus:outline-none"
            value={state.email.value}
            onChange={(e) => handleChange(e, "email")}
            onBlur={() => handleValid("email")}
          />
        </div>

        {/* CARD DETAILS */}
        <label htmlFor="Card Details">Card Details</label>
        <div
          className={`${
            state.cardNumber.valid === undefined
              ? `border-slate-200`
              : state.cardNumber.valid
              ? `border-green-400`
              : `border-red-400`
          } max-w-sm border-solid border-2 rounded-md py-2 px-4 flex`}
        >
          <input
            type="text"
            maxLength={19}
            className="flex-[4] focus:outline-none"
            value={state.cardNumber.value}
            onChange={(e) => handleChange(e, "cardNumber")}
            onBlur={() => handleValid("cardNumber")}
          />
        </div>
      </form>
    </section>
  );
}
