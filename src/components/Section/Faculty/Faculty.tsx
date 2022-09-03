import { useEffect, useState } from "react";
import classes from "./Faculty.module.css";
import Namecard from "../../Namecard/Namecard";

interface Props {
  faculty: Array<any>;
}

const Faculty = ({ faculty }: Props) => {
  return (
    <div className={classes.Faculty}>
      {faculty.map((s: any, i) => {
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

export default Faculty;
