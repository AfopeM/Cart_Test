"use client";
import React from "react";
import { useState, useReducer } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState<boolean>();

  const [cardNumber, setCardNumber] = useState("");
  const [validCardNumber, setValidCardNumber] = useState<boolean>();

  function handleValid(input: string) {
    if (input === "email") {
      const emailRegex = /^\w+([-\.=%+]*\w)*@\w([\.]?\w)*(\.\w{2,4})$/;
      setValidEmail((prev) =>
        emailRegex.test(email) ? (prev = true) : (prev = false)
      );
    }

    if (input === "cardNumber") {
      const cardNumberRegex = /^[0-9]{4}\s([0-9]{4}\s){2}[0-9]{4}/;
      setValidCardNumber((prev) =>
        cardNumberRegex.test(cardNumber) ? (prev = true) : (prev = false)
      );
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, input: string) {
    if (input === "email") setEmail(e.target.value);
    if (input === "cardNumber") {
      const value = e.target.value
        .replace(/[^0-9]/gi, "")
        .replace(/(.{4})/gi, "$1 ")
        .trim();
      setCardNumber(value);
    }
  }

  return (
    <section className="px-12 py-6 ">
      <h2>Payment Details</h2>
      <form action="">
        {/* EMAIL */}
        <label htmlFor="email">Email Address</label>
        <div
          className={` ${
            validEmail === undefined
              ? `border-slate-400`
              : validEmail
              ? `border-green-400`
              : `border-red-400`
          } max-w-sm border-solid border-2 rounded-md py-2 px-4 flex`}
        >
          <span className="flex-[0.5] text-center">@</span>
          <input
            type="email"
            className="flex-[4] focus:outline-none"
            value={email}
            onChange={(e) => handleChange(e, "email")}
            onBlur={() => handleValid("email")}
          />
        </div>

        {/* CARD DETAILS */}
        <label htmlFor="Card Details">Card Details</label>
        <div
          className={`${
            validCardNumber === undefined
              ? `border-slate-400`
              : validCardNumber
              ? `border-green-400`
              : `border-red-400`
          } max-w-sm border-solid border-2 rounded-md py-2 px-4 flex`}
        >
          <span className="flex-[0.5] text-center">@</span>
          <input
            type="text"
            maxLength={19}
            className="flex-[4] focus:outline-none"
            value={cardNumber}
            onChange={(e) => handleChange(e, "cardNumber")}
            onBlur={() => handleValid("cardNumber")}
          />
        </div>

        <button className="mt-4 bg-blue-300 px-6 py-2">Submit</button>
      </form>
    </section>
  );
}
