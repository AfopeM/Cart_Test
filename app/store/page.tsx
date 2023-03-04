"use client";
import { StoreItems } from "@/component";
import items from "@/data/items.json";

export default function Store() {
  return (
    <main>
      <h1 className="uppercase font-black text-4xl text-center mt-12 tracking-widest">
        Store
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center p-12 gap-10">
        {items.map((item) => {
          return <StoreItems key={item.price} {...item} />;
        })}
      </section>
    </main>
  );
}
