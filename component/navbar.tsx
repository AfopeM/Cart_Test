"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { cart } from "@/GlobalRedux/Features/cartSlice";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartSize = useSelector(cart).reduce((acc, c) => acc + c.quantity, 0);
  const route = [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Store", path: "/store" },
  ];

  return (
    <nav className="py-4 px-8 bg-slate-700 text-white flex justify-between items-center">
      <ul className="flex gap-4">
        {route.map((list) => {
          return (
            <li key={list.name}>
              <Link className="uppercase" href={list.path}>
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link rel="stylesheet" className="w-8 h-8 relative" href="/cart">
        {cartSize >= 1 ? (
          <div className="absolute bg-orange-600 -right-2 -top-1 w-6 h-6 text-center rounded-full">
            {cartSize}
          </div>
        ) : (
          ""
        )}
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </nav>
  );
}
