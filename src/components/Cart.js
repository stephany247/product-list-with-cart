import React from "react";

export default function Cart({
  cartState,
  items,
  handleRemoveFromCart,
  handleConfirmation,
  calculateTotal,
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red">
        Your Cart (
        {Object.values(cartState.items).reduce(
          (total, quantity) => total + quantity,
          0
        )}
        )
      </h1>
      {Object.keys(cartState.items).length > 0 ? (
        <div className="my-4">
          <ul className="list-none">
            {cartState.order.map((itemId) => {
              const item = items.find((item) => item.id === parseInt(itemId));
              return item ? (
                <li
                  key={itemId}
                  className="my-2 py-2 border-b border-rose-100 flex items-center justify-between"
                >
                  <div className="">
                    <p className="font-bold">{item.name}</p>
                    <div className="flex gap-3 py-1 text-sm font-semibold items-center">
                      <p className="text-red">{cartState.items[itemId]}x</p>
                      <p className="text-rose-400 font-normal">
                        @ {`$${item.price.toFixed(2)}`}
                      </p>
                      <p className="text-rose-500">{`$${(
                        cartState.items[itemId] * item.price
                      ).toFixed(2)}`}</p>
                    </div>
                  </div>

                  <button onClick={(e) => handleRemoveFromCart(item.id)}>
                    <svg
                      className="group border-2 border-rose-300 hover:border-rose-500 rounded-full p-0.5 w-5 h-5"
                      alt={`Remove ${item.name}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 10 10"
                    >
                      <path
                        fill="#CAAFA7"
                        className="group-hover:fill-rose-500"
                        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                      />
                    </svg>
                  </button>
                </li>
              ) : null;
            })}
          </ul>
          <div className="my-4 flex items-center justify-between">
            <p className=" text-rose-900 text-sm">Order Total: </p>
            <p className="font-bold text-rose-900 text-2xl">
              ${calculateTotal()}
            </p>
          </div>
          <div className="text-center text-sm bg-rose-50 p-3 flex items-center gap-1 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                fill="#1EA575"
                d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
              />
              <path
                fill="#1EA575"
                d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
              />
            </svg>
            <p>
              This is a <span className="font-semibold">carbon-neutral </span>
              delivery
            </p>
          </div>
          <button
            className="text-center w-full bg-red rounded-full p-3 mt-4 text-rose-50 hover:bg-orange-800"
            onClick={handleConfirmation}
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <div>
          <img
            src="./assets/images/illustration-empty-cart.svg"
            alt="Add to cart"
            className="w-20 h-fit mb-6 mt-12 mx-auto"
          />
          <p className="text-sm font-bold text-center text-rose-500">
            Your added items will appear here.
          </p>
        </div>
      )}
    </div>
  );
}
