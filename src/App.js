import "./App.css";
import items from "./data.json";
import ProductCart from "./components/ProductCard";
import Cart from "./components/Cart";
import { cartReducer } from "./hooks/useCart";
import { useReducer, useState } from "react";
import Example from "./components/ConfirmationModal";
import ConfirmationModal from "./components/ConfirmationModal";

const initialState = {
  items: {},
  order: [],
};

function App() {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const [open, setOpen] = useState(false);

  const handleAddToCart = (itemId) => {
    dispatch({ type: "ADD_ITEM", payload: { itemId } });
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { itemId } });
  };

  const handleIncrement = (itemId) => {
    dispatch({ type: "INCREMENT_ITEM", payload: { itemId } });
  };

  const handleDecrement = (itemId) => {
    dispatch({ type: "DECREMENT_ITEM", payload: { itemId } });
  };

  const calculateTotal = () => {
    return Object.keys(cartState.items)
      .reduce((total, itemId) => {
        const item = items.find((item) => item.id === parseInt(itemId));
        if (item) {
          total += item.price * cartState.items[itemId];
        }
        return total;
      }, 0)
      .toFixed(2);
  };

  const handleConfirmation = () => {
    setOpen(true);
  };

  const handleResetCart = () => {
    dispatch({ type: "RESET_CART" });
    setOpen(false);
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
            handleRemoveFromCart={handleRemoveFromCart}
            handleConfirmation={handleConfirmation}
            calculateTotal={calculateTotal}
          />
          <ConfirmationModal
            items={items}
            cartState={cartState}
            open={open}
            setOpen={setOpen}
            handleResetCart={handleResetCart}
            calculateTotal={calculateTotal}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
