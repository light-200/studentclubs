// import classes from "./Namecard.module.css";
import StudentCard from "../../types/students";


const Namecard = (props: StudentCard) => {
  return (
    <div className="mt-4">
      <div className="w-11/12 sm:w-10/12 mx-2 border-2 border-gray-200 relative">
        <div className="">
        <img className="w-full xl:w-80 h-72 " src={props.profileImage.url} />
        </div>
        <div className="text-lg p-4 h-40">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="mt-1">{props.name}</p>
          <p>{props.session}</p>
          <p>{props.branch}</p>
        </div>
      </div>
    </div>
  );
};

export default Namecard;
