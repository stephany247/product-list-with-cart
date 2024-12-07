import items from "../data.json";

import React, { useReducer } from "react";
import { cartReducer } from "../hooks/useCart";

const initialState = {};

export default function ProductCart() {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const handleAddToCart = (itemId) => {
    dispatch({ type: "ADD_ITEM", itemId });
  };

  const handleIncrement = (itemId) => {
    dispatch({ type: "INCREMENT_ITEM", itemId });
  };

  const handleDecrement = (itemId) => {
    dispatch({ type: "DECREMENT_ITEM", itemId });
  };

  return (
    <div className="mx-auto max-w-2xl py-2 sm:py-2 lg:max-w-7xl">
      <h1 className="text-4xl mx-auto font-bold tracking-tight text-gray-900">
        Desserts
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {items.map((item) => (
          <div key={item.id} className="relative mb-10">
            <div className="relative">
              <img
                alt={item.name}
                src={item.image.desktop}
                className={`relative aspect-square w-full rounded-md object-cover ${cartState[item.id] ? 'border-2 border-red' : 'border-none'} hover:opacity-75 lg:aspect-auto lg:h-auto z-0`}
              />
              {cartState[item.id] ? (
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center border-2 border-red bg-red px-2.5 py-3.5 rounded-3xl font-semibold z-10 w-1/2 h-8">
                  <button
                    onClick={(e) => handleDecrement(item.id)}
                    className="group text-lg bg-inherit hover:bg-white border-2 border-white rounded-full"
                  >
                    <svg
                      className="bg-inherit my-2 mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="2"
                      fill="none"
                      viewBox="0 0 10 2"
                    >
                      <path
                        fill="#fff"
                        className="group-hover:fill-red"
                        d="M0 .375h10v1.25H0V.375Z"
                      />
                    </svg>
                  </button>
                  <span className="mx-2 text-sm text-white font-semibold">
                    {cartState[item.id]}
                  </span>
                  <button
                    onClick={(e) => handleIncrement(item.id)}
                    className="group text-lg bg-inherit hover:bg-white border-2 border-white rounded-full"
                  >
                    <svg
                      className="bg-inherit my-1 mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 10 10"
                    >
                      <path
                        fill="#fff"
                        className="group-hover:fill-red"
                        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-rose-300 hover:border-red bg-white px-auto py-1.5 rounded-3xl flex gap-1 justify-center items-center font-semibold text-xs hover:text-red z-10 w-1/2 h-8"
                  onClick={(e) => handleAddToCart(item.id)}
                >
                  <img
                    className="w-4"
                    src="/assets/images/icon-add-to-cart.svg"
                    alt="Cart icon"
                  />
                  Add to Cart
                </button>
              )}
            </div>

            <div className="mt-8">
              <p className="text-rose-500 text-sm font-semibold">
                {item.category}
              </p>
              <p className="font-bold">{item.name}</p>
              <p className="text-md font-semibold text-red">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
