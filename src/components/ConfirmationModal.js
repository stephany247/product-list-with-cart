import { useState } from "react";

export default function ConfirmationModal({
  cartState,
  items,
  open,
  handleResetCart,
  calculateTotal
}) {
  if (!open) return null;

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
                      fill="#1EA575"
                    />
                    <path
                      d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
                      fill="#1EA575"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-left sm:ml-4 sm:mt-0 sm:text-left">
                  <h1 class="text-3xl font-bold text-rose-900" id="modal-title">
                    Order Confirmed
                  </h1>
                  <p className="text-rose-500">We hope you enjoy your food!</p>
                  <div class="bg-rose-50 rounded-lg my-4 p-3">
                    <ul className="list-none">
                      {cartState.order.map((itemId) => {
                        const item = items.find(
                          (item) => item.id === parseInt(itemId)
                        );
                        return (
                          <li
                            key={itemId}
                            className="py-4 border-b-2 border-rose-100 flex gap-3 justify-between items-center"
                          >
                            <div className="flex gap-3 text-sm font-semibold">
                              <img
                                alt={item.name}
                                src={item.image.thumbnail}
                                className="w-12 h-12 rounded-md"
                              ></img>
                              <div className="">
                                <p className="font-bold">{item.name}</p>
                                <div className="flex gap-3">
                                  <p className="text-red">
                                    {cartState.items[itemId]}x
                                  </p>
                                  <p className="text-rose-500 font-normal">
                                    @ {`$${item.price.toFixed(2)}`}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <span className="text-rose-500 font-semibold">{`$${(
                              cartState.items[itemId] * item.price
                            ).toFixed(2)}`}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="my-4 flex items-center justify-between">
                      <p className=" text-rose-900 text-sm">Order Total: </p>
                      <p className="font-bold text-rose-900 text-2xl">
                        ${calculateTotal()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-full bg-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:mx-3"
                onClick={handleResetCart}
              >
                Start New Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
