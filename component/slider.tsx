"use client";
import items from "@/data/items.json";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Slider() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const varSlide = {
    initial: (direction: number) => {
      return {
        x: direction < 0 ? -200 : 200,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exits: (direction: number) => {
      return {
        x: direction < 0 ? -200 : 200,
        opacity: 0,
      };
    },
  };

  function slider(dire: number) {
    setDirection(dire);

    if (dire == 1) {
      setSlide(slide + 1);
      if (slide >= items.length - 1) return setSlide(0);
    }

    if (dire == -1) {
      setSlide(slide - 1);
      if (slide <= 0) return setSlide(items.length - 1);
    }
  }

  function jumpSlider(jump: number) {
    setSlide(jump);
  }

  return (
    <>
      <ul className="my-10 flex w-1/3 mx-auto justify-between">
        {items.map((item) => {
          return (
            <li key={item.name}>
              <button
                className={`${
                  slide == item.id - 1 ? `bg-slate-400` : ``
                } rounded-full border-2 border-solid border-gray-600 w-8 h-8`}
                onClick={() => jumpSlider(item.id - 1)}
              ></button>
            </li>
          );
        })}
      </ul>
      <main className="flex w-4/5 h-[450px] gap-6 mx-auto flex-col md:flex-row">
        <button
          className="flex-[0.5] text-white bg-slate-400"
          onClick={() => slider(-1)}
        >
          Left
        </button>
        <div className="flex-[4] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              variants={varSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              src={items[slide].imgUrl}
              alt={items[slide].name}
              key={items[slide].id}
              custom={direction}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
        <button
          className="flex-[0.5] text-white bg-slate-400"
          onClick={() => slider(1)}
        >
          Right
        </button>
      </main>
    </>
  );
}
