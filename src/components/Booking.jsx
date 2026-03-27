import aboutImage6 from "../assets/6.svg";
const Booking = () => {
  return (
    <div className="bg-black text-white py-15 px-6">

      <div className="max-w-6xl mx-auto flex justify-center items-center gap-6">
              
              <img
                src={aboutImage6}
                alt="coffee"
                className="max-w-full h-auto"
              />
            </div>

      {/* <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-3xl mb-6 text-orange-400">
            Book Your Table Now!
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <input placeholder="First Name" className="p-3 bg-[#3b2a22] rounded" />
            <input placeholder="Email" className="p-3 bg-[#3b2a22] rounded" />
            <input placeholder="Phone" className="p-3 bg-[#3b2a22] rounded" />
            <input placeholder="Time" className="p-3 bg-[#3b2a22] rounded" />
          </div>

          <button className="mt-6 bg-orange-500 px-6 py-3 rounded w-full hover:bg-orange-600">
            BOOK TABLE NOW
          </button>
        </div>

        <div>
          <img src="/cafe.jpg" className="rounded-xl shadow-lg" />
        </div>

      </div> */}
    </div>
  );
};

export default Booking;