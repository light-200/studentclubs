import Namecard from "../../Namecard/Namecard";
import Students from "../../../types/students";

interface Props {
  students: Array<Students>;
}
const Student = ({ students }: Props) => {
  return (
    <div className="grid sm:grid-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
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
  );
};

export default Student;
