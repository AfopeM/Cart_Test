"use client";

import items from "@/data/items.json";
import { useShoppingCart } from "@/context/ShoppingCartContext";

type ItemProps = {
  id: number;
  quantity: number;
};

export default function CartItems({ id, quantity }: ItemProps) {
  const { removeFromCart } = useShoppingCart();

  const stuff = items.find((item) => (id === item.id ? id : null));

  return (
    <article className="flex gap-2 items-center">
      <img
        src={stuff?.imgUrl}
        alt={stuff?.name}
        className="w-24 h-24 object-cover"
      />
      <p>Name: {stuff?.name}</p>
      <p>Price:{stuff?.price}</p>
      <p>Quantity: {quantity}</p>
      <button
        className="bg-slate-700 text-slate-100 px-4 py-2"
        onClick={() => removeFromCart(stuff!.id)}
      >
        remove
      </button>
    </article>
  );
}
