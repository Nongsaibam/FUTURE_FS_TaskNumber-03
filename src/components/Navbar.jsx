const Navbar = () => {
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur text-white px-8 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl text-orange-400 cursor-pointer" onClick={() => handleNavClick("home")}>Person</h1>

      <ul className="hidden md:flex gap-8 text-sm tracking-wide">
        <li className="hover:text-orange-400 cursor-pointer" onClick={() => handleNavClick("home")}>HOME</li>
        <li className="hover:text-orange-400 cursor-pointer" onClick={() => handleNavClick("about")}>ABOUT</li>
        <li className="hover:text-orange-400 cursor-pointer" onClick={() => handleNavClick("menu")}>MENU</li>
        <li className="hover:text-orange-400 cursor-pointer" onClick={() => handleNavClick("reservation")}>RESERVATION</li>
        <li className="hover:text-orange-400 cursor-pointer" onClick={() => handleNavClick("features")}>BLOG</li>
      </ul>

      <div className="text-xl md:hidden">☰</div>
    </div>
  );
};

export default Navbar;