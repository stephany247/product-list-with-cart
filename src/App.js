import "./App.css";
import items from "./data.json";
import ProductCart from "./components/ProductCard";
import Cart from "./components/Cart";
import { cartReducer } from "./hooks/useCart";
import { useReducer } from "react";

const initialState = {};

function App() {
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
    <div className="font-redhat bg-rose-50 flex justify-center">
      <section className="flex flex-col md:flex-row gap-12 sm:my-12 sm:mx-16 my-6 mx-6">
        <div className="">
          <ProductCart
            items={items}
            cartState={cartState}
            handleAddToCart={handleAddToCart}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </div>
        <div className="lg:w-5/12 bg-white rounded-lg p-6 shadow-md h-fit">
          <Cart
            items={items}
            cartState={cartState}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
