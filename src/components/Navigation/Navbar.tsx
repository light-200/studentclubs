import { useState } from "react";
import Logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className="fixed w-full z-50">
      <div className={navbar ? "navbar-active" : "navbar-notactive"}>
        <Link to={"/"}>
          <img className="w-20" src={Logo} />
        </Link>
        <div className="text-xl font-bold text-center md:text-4xl">
          Govind Ballabh Pant Institute Of Engineering And Technology
          <p className="text-base md:text-2xl ">
            An Autonomous Institute Of Government Of Uttarakhand
          </p>
        </div>
        <div>
          <img className="w-8 m-2 md:w-110" src={facebook} alt="" />
          <img className="w-8 m-2 md:w-110" src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
