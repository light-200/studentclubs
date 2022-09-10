// import { useEffect, useState } from "react";
// import classes from "./Faculty.module.css";
import Namecard from "../../Namecard/Namecard";

interface Props {
  faculty: Array<any>;
}

const Faculty = ({ faculty }: Props) => {
  return (
    <div className="">
      {faculty.map((s: any, i) => {
        return (
          <Namecard
            
            profileImage={s.profileImage}
            name={s.name}
          />
        );
      })}
    </div>
  );
};

export default Faculty;
