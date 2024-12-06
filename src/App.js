// import logo from './logo.svg';
import "./App.css";
import ProductCart from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="font-redhat bg-rose-50 flex justify-center">
      <section className="flex flex-col md:flex-row gap-12 my-12 mx-24">
        <div className="">
          <ProductCart />
        </div>
        <div className="w-5/12 bg-white rounded-lg p-6 shadow-md h-fit">
          <Cart />
        </div>
      </section>
    </div>
  );
}

export default App;
