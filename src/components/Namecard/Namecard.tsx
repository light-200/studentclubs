import StudentCard from "../../types/students";

const Namecard = (props: StudentCard) => {
  return (
    <div className="w-11/12 sm:w-10/12 mx-2 border-1 border-gray-200 relative rounded-md overflow-hidden shadow-lg group hover:shadow-xl grid place-items-center">
      <img
        className="h-full group-hover:scale-105 transition-transform duration-500"
        src={props.profileImage.url}
      />
      <div className="text-lg p-4 max-h-30 absolute bottom-0 bg-gradient-to-b from-transparent to-black left-0 w-full text-white group-hover:bg-opacity-50 transition-colors duration-300">
        <h1 className="text-lg font-bold">{props.title}</h1>
        <p className="mt-1">{props.name}</p>
        {/* <p>{props.session}</p>
        <p>{props.branch}</p> */}
      </div>
    </div>
  );
};

export default Namecard;
