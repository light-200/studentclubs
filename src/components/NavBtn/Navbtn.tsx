import classes from "./Navbtn.module.css";

interface Prop {
  name: string;
  handleClick: Function;
  children: any;
  active?: Boolean;
}

const Navbtn = ({ children, name, handleClick, active }: Prop) => {
  let bntClasses = active
    ? `${classes.Navbtn} ${classes.Active}`
    : classes.Navbtn;

  return (
    <div
      className={bntClasses}
      onClick={() => {
        handleClick(name);
      }}
    >
      {children}
    </div>
  );
};

export default Navbtn;
