import { useEffect, useState } from "react";
import Post from "../../Post/Post";
import classes from "./Events.module.css";
import Posts from "../../../types/posts";

interface Props {
  posts: Array<Posts>;
}

const Events = ({ posts }: Props) => {
  return (
    <div className={classes.Events}>
      {posts.map((post: Posts, i) => {
        return (
          <Post
            description={post.description}
            title={post.title}
            image={post.image}
            coverImages={post.coverImages}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Events;
