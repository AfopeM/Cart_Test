"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CartItems, Form, FormReducer } from "@/component";
import { useShoppingCart } from "@/context";
import items from "@/data/items.json";

export default function Cart() {
  const { cartItemsArr } = useShoppingCart();
  const [complete, setComplete] = useState(false);

  const totalPrice = cartItemsArr.reduce((total, cItem) => {
    const item = items.find((it) => it.id === cItem.id);
    return total + (item?.price || 0) * cItem.quantity;
  }, 0);

  function submitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setComplete(true);
  }

  return (
    <main className="flex flex-col md:flex-row justify-center relative">
      <section className="px-12 py-6">
        <h2>Summary Order</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
          facere?
        </p>
        <div className="flex flex-col gap-6 py-8">
          {cartItemsArr.map((citems) => (
            <CartItems
              key={citems.id}
              id={citems.id}
              quantity={citems.quantity}
            />
          ))}
        </div>
        <p>Total Price: {totalPrice}</p>
      </section>
      {/* <Form /> */}
      <FormReducer />
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 1.5,
        }}
        className={`absolute right-0 left-0 h-full bg-green-200 opacity-90 ${
          complete ? `flex` : `hidden`
        } justify-center items-center`}
      >
        <p className="uppercase text-4xl font-black text-green-600">Complete</p>
      </motion.div>
    </main>
  );
}
