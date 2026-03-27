import aboutImage1 from "../assets/1.svg";
import aboutImage2 from "../assets/2.svg";
import aboutImage3 from "../assets/3.svg";

const About = () => {
  return (
    <div className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-6">
        
        <img
          src={aboutImage1}
          alt="coffee"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-6 mt-12">
         <img
          src={aboutImage2}
          alt="coffee"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      <div className="max-w-6xl mx-auto flex justify-center items-center gap-12 mt-30">
         <img
          src={aboutImage3}
          alt="coffee"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default About;