import { useState } from "react";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navigation/Navbar";
import Navbtn from "../components/NavBtn/Navbtn";
import Section from "../containers/Section/Section";
import "./App.css";
import Footer from "../components/Footer/Footer";

import bg from "../assets/mainbg.jpg";

function App() {
  const [section, setSection] = useState("event");
  const handleClick = (name: string) => {
    setSection(name);
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="absolute z-10 w-full">
        <section className="flex justify-center mt-48 xl:mt-96">
          <h1 className="font text-2xl md:text-4xl xl:text-6xl font-bold text-white drop-shadow-xl shadow-neutral-900">
            Student Activities Cell
          </h1>
        </section>
      </div>
      <div className="h-screen relative grid place-items-center overflow-hidden">
        <img
          src={bg}
          className="w-full h-screen scale-[1.2] opacity-80 blur-sm -z-10 object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <section className="w-full">
          <div className="flex w-screen xl:w-1/2">
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
