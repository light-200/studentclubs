import Namecard from "../../Namecard/Namecard";
import Students from "../../../types/students";

interface Props {
  students: Array<Students>;
}
const Student = ({ students }: Props) => {
  return (
    <div className="flex">
      <div className="grid  grid-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {students.map((s: Students, i) => {
          return (
            <Namecard
              title={s.title}
              key={i}
              branch={s.branch}
              session={s.session}
              profileImage={s.profileImage}
              name={s.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Student;
