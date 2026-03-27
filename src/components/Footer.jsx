
import نوشیدنی from "../assets/footer.svg";
const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-6 text-center">
       <div className="max-w-6xl mx-auto flex justify-center items-center gap-6">
              
              <img
                src={نوشیدنی}
                alt="coffee"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
    </div>
  );
};

export default Footer;