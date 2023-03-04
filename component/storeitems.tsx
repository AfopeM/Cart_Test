"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addTo,
  increase,
  decrease,
  remove,
  cart,
} from "@/GlobalRedux/Features/cartSlice";

type ShopProps = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

export default function StoreItems({ id, name, imgUrl, price }: ShopProps) {
  const item = useSelector(cart).find((c) => name === c.name);
  const dispatch = useDispatch();

  console.log(useSelector(cart));

  return (
    <article key={id} className="bg-slate-50 w-2/3 rounded-lg overflow-hidden">
      <div className="w-full h-[230px] relative ">
        <Image
          src={imgUrl}
          alt={name}
          fill
          sizes="33vw"
          priority
          className="object-cover"
        />
      </div>
      <div className="flex gap-4 py-4 px-8 flex-col items-center">
        <div className="flex justify-between w-full">
          <h2 className="font-semibold text-3xl">{name}</h2>
          <p className="text-2xl tracking-wider">{price}</p>
        </div>
        {!item ? (
          <button
            className="h-10 w-full rounded-md bg-blue-300 text-white text-center hover:bg-blue-500 transition-colors duration-200"
            onClick={() =>
              dispatch(addTo({ name: name, img: imgUrl, price: price }))
            }
          >
            + Add to Cart
          </button>
        ) : (
          <>
            <div className="flex w-2/3 h-8 justify-between items-center md:justify-between md:w-4/5">
              <button
                className="h-full w-8 rounded-md bg-blue-300 text-white text-center hover:bg-blue-500 transition-colors duration-200"
                onClick={() => dispatch(decrease({ name: name }))}
              >
                --
              </button>
              <p className="font-semibold">{item.quantity}</p>
              <button
                className="h-full w-8 rounded-md bg-blue-300 text-white text-center hover:bg-blue-500 transition-colors duration-200"
                onClick={() => dispatch(increase({ name: name }))}
              >
                +
              </button>
            </div>
            <button
              className="text-white bg-red-300 py-2 px-4 rounded-md tracking-wider hover:bg-red-500 transition-colors duration-200"
              onClick={() => dispatch(remove({ name: name }))}
            >
              Remove
            </button>
          </>
        )}
      </div>
    </article>
  );
}

// || item.quantity <= 0
