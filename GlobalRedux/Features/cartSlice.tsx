"use client";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/GlobalRedux/store";

type Action = {
  payload: {
    name: string;
    img?: string;
    price?: number;
  };
};

type Item = {
  name: string;
  img: string;
  price: number;
  quantity: number;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Item[],
  reducers: {
    addTo: (state, action: Action) => {
      if (state.find((s) => s.name === action.payload!.name)) return state;
      const { name, img, price } = action.payload;

      return [
        {
          name: name,
          img: img || "",
          price: price || 0,
          quantity: 1,
        },
        ...state,
      ];
    },

    increase: (state, action: Action) => {
      const { name } = action.payload;
      state.map((s) => {
        if (s.name === name) s.quantity++;
        return s;
      });
      return;
    },

    decrease: (state, action: Action) => {
      const { name } = action.payload;
      state.map((s) => {
        if (s.name === name) s.quantity = s.quantity < 1 ? 0 : s.quantity - 1;
        if (s.quantity === 0) {
          console.log(s.quantity);
          remove({ name: name });
        }
        return s;
      });

      return;
    },

    remove: (state, action: Action) => {
      console.log(action.payload.name);
      return state.filter((s) => s.name !== action.payload.name);
    },

    empty: () => {
      return [];
    },
  },
});

export const cart = (state: RootState) => state.cart;
export const cartTotalPrice = (state: RootState) =>
  state.cart.reduce((acc, c) => {
    return acc + Number((c.price * c.quantity).toFixed(2));
  }, 0);
export const { addTo, increase, decrease, remove, empty } = cartSlice.actions;
export default cartSlice.reducer;
