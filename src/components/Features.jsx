import { Coffee, ShoppingCart, Store } from "lucide-react";
import aboutImage5 from "../assets/5.svg";

const Features = () => {
  return (
    <div className="bg-black text-white py-20 text-center">

      <div className="max-w-6xl mx-auto flex justify-center items-center gap-6">
              
              <img
                src={aboutImage5}
                alt="coffee"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

      {/* <h2 className="text-3xl mb-12 text-orange-400">
        What We Provide You
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">

        <div className="bg-[#1f1f1f] p-6 rounded-xl">
          <Coffee className="mx-auto mb-4 text-orange-400" size={40} />
          <h3 className="mb-2">Best Coffee Machine</h3>
          <p className="text-gray-400 text-sm">
            High-quality machines for perfect taste.
          </p>
        </div>

        <div className="bg-[#1f1f1f] p-6 rounded-xl">
          <ShoppingCart className="mx-auto mb-4 text-orange-400" size={40} />
          <h3 className="mb-2">Shop Coffee Online</h3>
          <p className="text-gray-400 text-sm">
            Order anytime easily.
          </p>
        </div>

        <div className="bg-[#1f1f1f] p-6 rounded-xl">
          <Store className="mx-auto mb-4 text-orange-400" size={40} />
          <h3 className="mb-2">Barista Coffee Shops</h3>
          <p className="text-gray-400 text-sm">
            Premium café experience.
          </p>
        </div>

      </div> */}
    </div>
  );
};

export default Features;