interface Prop {
  name: string;
  handleClick: Function;
  children: any;
  active?: Boolean;
}

const Navbtn = ({ children, name, handleClick, active }: Prop) => {
  let bntClasses = active
    ? "grid place-content-center m-1 text-sm font-bold rounded-sm h-[60px] p-2 w-full border border-blue-800 bg-blue-800 text-white"
    : "grid place-content-center m-1 text-sm font-bold rounded-sm h-[60px] p-2 w-full border border-blue-100 hover:bg-blue-300 ";
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
