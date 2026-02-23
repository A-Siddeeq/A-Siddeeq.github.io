import { useState } from "react";

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Resume", "Portfolio", "Contact"];

  let [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="absolute top-0 z-20 w-full flex flex-col md:flex-row items-center justify-around py-2 text-center text-white">
        <div className="flex items-center justify-around w-full ">
          <h1 className="text-xl font-bold fredoka text-blue-400">
            As - Siddeeq
          </h1>
          <div
            className="md:hidden cursor-pointer text-3xl text-blue-400"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            =
          </div>
        </div>
        <div
          className={`w-full transition duration-500 ease-in ${
            isMenuOpen
              ? "flex flex-col md:flex-row justify-between bg-blue-400"
              : "hidden md:flex"
          }`}
        >
          {links.map((link) => {
            return (
              <p
                key={link}
                className={`p-2 md:py-0 cursor-pointer rounded-xl fredoka transition ease-in-out hover:text-black hover:bg-blue-400 duration-500`}
              >
                {link}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
