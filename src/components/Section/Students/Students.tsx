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
            title={s}
            key={s + i}
            batch={(Math.random() * 10).toPrecision(2).toString()}
            branch={s.slice("a")[0]}
            image={s}
            name={s + s}
          />
        );
      })}
    </div>
  );
};

export default Student;
