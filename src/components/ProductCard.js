import items from "../data.json";

export default function ProductCart() {
  return (
    <div className="mx-auto max-w-2xl py-2 sm:py-2 lg:max-w-7xl">
      <h1 className="text-4xl mx-auto font-bold tracking-tight text-gray-900">
        Desserts
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {items.map((item) => (
          <div key={item.id} className="group relative mb-10">
            <div className="relative">
              <img
                alt={item.name}
                src={item.image.desktop}
                className="relative aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-auto z-0"
              />
              <button className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-rose-300 hover:border-red bg-white px-auto py-1.5 rounded-3xl flex gap-1 flex-rol justify-center items-center font-semibold text-xs z-10 w-1/2">
                <img
                  className=""
                  src="/assets/images/icon-add-to-cart.svg"
                  alt="Cart icon"
                />
                Add to Cart
              </button>
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
        {/* </div> */}
      </div>
      {/* </section> */}
    </div>
  );
}
