import Namecard from "../../Namecard/Namecard";

interface Props {
  faculty: Array<any>;
}

const Faculty = ({ faculty }: Props) => {
  return (
    <div className="grid grid-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-screen">
      {faculty.map((s: any, i) => {
        return <Namecard profileImage={s.profileImage} name={s.name} />;
      })}
    </div>
  );
};

export default Faculty;
