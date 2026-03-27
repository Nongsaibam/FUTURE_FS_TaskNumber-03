import bgImage from "../assets/slide1-bg1.svg";
import centerImage from "../assets/نوشیدنی.svg";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-screen bg-cover bg-center relative flex items-center overflow-hidden"
    >
      {/* Gradient Overlay (better than plain black) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left">
          <p className="text-orange-400 tracking-widest mb-3 text-sm md:text-base">
            TREAT TO SELF
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            CHOCOLATE <br /> DELIGHT!
          </h1>

          <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
            A premium coffee experience with rich chocolate tone and smooth layers that melt in your mouth.
          </p>

          <button className="border border-orange-400 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-500 hover:border-orange-500 transition duration-300">
            SHOP NOW
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center relative">
          <img
            src={centerImage}
            alt="drink"
            className="w-64 sm:w-80 md:w-[380px] lg:w-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] animate-float"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;