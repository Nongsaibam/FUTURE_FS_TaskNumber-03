import image4 from "../assets/4.svg";

const menuItems = [
  // {
  //   name: "Espresso Coffee",
  //   price: "$3.5",
  //   img: "/espresso.jpg",
  // },
  // {
  //   name: "Cappuccino Arabica",
  //   price: "$3.5",
  //   img: "/cappuccino.jpg",
  // },
  // {
  //   name: "Cold Coffee",
  //   price: "$3.5",
  //   img: "/cold.jpg",
  // },
];

const Menu = () => {
  return (
    <div className="bg-black py-20 px-6">
       <div className="max-w-6xl mx-auto flex justify-center items-center gap-6">
              
              <img
                src={image4}
                alt="coffee"
                className=" max-w-full h-auto"
              />
            </div>

      {/* <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={item.img} className="h-48 w-full object-cover" />

            <div className="p-4 flex justify-between items-center">
              <h3>{item.name}</h3>
              <span className="text-orange-400">{item.price}</span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Menu;