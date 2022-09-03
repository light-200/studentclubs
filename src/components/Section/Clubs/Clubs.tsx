import { useState, useEffect } from "react";
import Post from "../../Post/Post";
import classes from "./Clubs.module.css";

interface Props {
  clubs: Array<any>;
}
const Clubs = ({ clubs }: Props) => {
  return (
    <div className={classes.Events}>
      {clubs.map((c: any, i) => {
        return <Post key={c + i} description={c} image={c} title={c} />;
      })}
    </div>
  );
};

export default Clubs;
 