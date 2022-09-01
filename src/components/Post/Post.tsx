import classes from "./Post.module.css";
import Posts from "../../types/posts";

const Post = (props: Posts) => {
  return (
    <div className={classes.Post}>
      <div className={classes.Image}>
        <img src={props.image} />
      </div>
      <div className={classes.Text}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={classes.btn}>Read more...</div>
      </div>
    </div>
  );
};

export default Post;
