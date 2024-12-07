export default function Cart() {
  return (
    <div className="">
      <h1 className="text-lg font-bold text-red">Your Cart (Quantity)</h1>
      <img
        src="./assets/images/illustration-empty-cart.svg"
        alt="Add to cart"
        className="w-20 h-fit mb-6 mt-12 mx-auto"
      />
      <p className="text-sm font-bold text-center text-rose-500">
        Your added items will appear here.
      </p>
    </div>
  );
}
