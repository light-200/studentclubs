import classes from "./Navbtn.module.css";
import { useState } from "react";

interface Prop {
  name: string;
  handleClick: Function;
  children: any;
}

const Navbtn = ({ children, name, handleClick }: Prop) => {
  const [active, setActive] = useState(false);

  let bntClasses = active
    ? `${classes.Navbtn} ${classes.Active}`
    : classes.Navbtn;

  return (
    <div
      className={bntClasses}
      onClick={() => {
        handleClick(name);
      }}
      onMouseOver={() => {
        setActive((active) => {
          return !active;
        });
      }}
      onMouseLeave={() => {
        setActive((active) => {
          return !active;
        });
      }}
    >
      {children}
    </div>
  );
};

export default Navbtn;
