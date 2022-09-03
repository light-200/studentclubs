import { useEffect, useState } from "react";
import Post from "../../Post/Post";
import classes from "./Events.module.css";

interface Props {
  posts: Array<any>;
}

const Events = ({ posts }: Props) => {
  return (
    <div className={classes.Events}>
      {posts.map((post: any, i) => {
        return (
          <Post
            description={post}
            title={post.split(",")[0]}
            image={post.split(" ")[0]}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Events;
