import { useState, useEffect } from "react";
import classes from "./Students.module.css";
import Namecard from "../../Namecard/Namecard";

interface Props {
  students: Array<any>;
}
const Student = ({ students }: Props) => {
  return (
    <div className={classes.Students}>
      {students.map((s: any, i) => {
        return (
          <Namecard
            title={s.title}
            key={s.name + i}
            branch={s.branch}
            batch={s.session}
            image={s.profileImage}
            name={s.name}
          />
        );
      })}
    </div>
  );
};

export default Student;
