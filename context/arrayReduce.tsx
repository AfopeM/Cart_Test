"use client";
import { useState } from "react";

export default function ArrReduce() {
  // HOW TO USE ARRAY.REDUCE TO CREAT OBJECTS
  const webDD = [
    { id: 1, category: "frontend", title: "All About That Sass" },
    {
      id: 2,
      category: "backend",
      title: "Beam me up, Scotty: Apache Beam tips",
    },
    {
      id: 3,
      category: "frontend",
      title: "Sanitizing HTML: Going antibactirial on XSS attacks",
    },
  ];

  const aa = webDD.reduce((t, w) => {
    const { id, category } = w;
    return {
      ...t,
      [category]: [...(t[category as keyof typeof t] || []), id],
    };
  }, {});

  // EXERCISE 1
  const webD = [
    { category: "frontend", pay: 98000 },
    { category: "backend", pay: 138000 },
    { category: "frontend", pay: 108000 },
  ];
  const ab = webD.reduce((t, w) => {
    return t + w.pay;
  }, 0);

  // EXERCISE 2
  const arrD = [
    ["1", "2", "3"],
    [false, true],
    [1, 2, 3],
  ];
  const ac = arrD.reduce((t: (string | number | boolean)[], w) => {
    return [...t, ...w];
  }, [] as (string | number | boolean)[]);

  // EXERCISE 3
  const ad = [1, -4, 12, 0, -3, 29, -150].reduce((acc, m) => {
    return m > 0 ? acc + m : acc;
  }, 0);

  // EXERCISE 4
  const ae = [12, 46, 32, 64].reduce((acc, m) => {
    // console.log(m > 0 ? m : 0);
    return acc;
  }, {});

  console.log(ae);

  return <main></main>;
}
