import { useState } from "react";
import Banner from "../components/Banner/Banner";

import Navbtn from "../components/NavBtn/Navbtn";
import Section from "../containers/Section/Section";
import Logo from "../assets/logo.png";
import "./App.css";
import Footer from "../components/Footer/Footer";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import bg from "../assets/mainbg.jpg";

function App() {
  const [section, setSection] = useState("event");
  const handleClick = (name: string) => {
    setSection(name);
  };

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className=" ">
      <div className="absolute z-10 w-full">
        <div className="fixed w-full">
          <div className={navbar ? "navbar-active" : "navbar-notactive"}>
            <div className="">
              <img className="w-20" src={Logo} />
            </div>
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
        <section className="flex justify-center mt-48 xl:mt-96">
          <h1 className="font text-4xl md:text-6xl xl:text-9xl font-semibold ">
            Student Activities Cell
          </h1>
        </section>
      </div>
      <img
        src={bg}
        className="w-full h-96 opacity-80 blur-sm -z-10 xl:h-full"
        alt=""
      />
      {/* <Banner /> */}
      <div className="flex flex-col justify-center items-center mt-8">
        <section className="w-11/12">
          <div className="flex w-1/2">
            <Navbtn
              handleClick={handleClick}
              name={"event"}
              active={section == "event"}
            >
              Events
            </Navbtn>

            <Navbtn
              handleClick={handleClick}
              name={"clubs"}
              active={section == "clubs"}
            >
              Clubs
            </Navbtn>
            <Navbtn
              handleClick={handleClick}
              name={"faculty"}
              active={section == "faculty"}
            >
              Faculty Coordinators
            </Navbtn>
            <Navbtn
              handleClick={handleClick}
              name={"student"}
              active={section == "student"}
            >
              Student Coordinators
            </Navbtn>
          </div>
          <Section id={section} />
        </section>
      </div>
      <Footer />

    </div>
  );
}

export default App;
