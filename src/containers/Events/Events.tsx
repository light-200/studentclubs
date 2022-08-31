import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import classes from "./Events.module.css";

const Events = () => {
  const [posts, setPosts] = useState<Array<any>>([]);

  useEffect(() => {
    setPosts([
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, hic.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita odit neque porro autem illo vel fuga quasi itaque qui voluptates.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum omnis culpa natus quaerat, quo in esse nulla ad inventore et accusamus nemo, vitae autem ut. Tempore nobis magnam quibusdam quaerat!",
    ]);
  }, []);

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
