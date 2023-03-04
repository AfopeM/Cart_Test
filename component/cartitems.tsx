"use client";
import { useSelector, useDispatch } from "react-redux";
import { remove, cart } from "@/GlobalRedux/Features/cartSlice";

export default function CartItems() {
  const itemsInCart = useSelector(cart);
  const dispatch = useDispatch();

  console.log(itemsInCart);

  return (
    <div>
      {itemsInCart.map((c) => {
        return (
          <article key={c.price} className="flex gap-2 items-center">
            <img src={c.img} alt={c.name} className="w-24 h-24 object-cover" />
            <p>Name: {c.name}</p>
            <p>Price:{c.price}</p>
            <p>Quantity: {c.quantity}</p>
            <button
              onClick={() => dispatch(remove({ name: c.name }))}
              className="bg-slate-700 text-slate-100 px-4 py-2"
            >
              remove
            </button>
          </article>
        );
      })}
    </div>
  );
}
