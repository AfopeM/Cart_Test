"use client";
import { FormReducer, CartItems } from "@/component";
import { useSelector, useDispatch } from "react-redux";
import { cartTotalPrice, empty } from "@/GlobalRedux/Features/cartSlice";

export default function Cart() {
  const total = useSelector(cartTotalPrice);
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col md:flex-row justify-center relative">
      <section className="px-12 py-6">
        <h2>Summary Order</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
          facere?
        </p>
        <div className="flex flex-col gap-6 py-8">
          <CartItems />
        </div>
        <p>Total Price:{total}</p>
        <button
          onClick={() => dispatch(empty())}
          className="bg-slate-700 text-slate-100 px-4 py-2"
        >
          remove
        </button>
      </section>
      <FormReducer />
    </main>
  );
}
