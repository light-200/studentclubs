import { useEffect, useState } from "react";
// import classes from "./Events.module.css";
import Post from "../../Post/Post"; 
import Posts from "../../../types/posts";

interface Props {
  posts: Array<Posts>;
}

const Events = ({ posts }: Props) => {
  return (

    <div className="flex justify-center">
      <div className="grid  grid-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {posts.map((post: Posts, i) => {
          return (
            <Post
              description={post.description}
              title={post.title}
              image={post.image}
              coverImages={post.coverImages}
                 slug={post.slug}
              key={i}
            />
          );
        })}
      </div>

    </div>
  );
};

export default Events;
