import classes from "./Post.module.css";
import Posts from "../../types/posts";
import { Link } from "react-router-dom";

const Post = (props: Posts) => {
  return (
    <div className={classes.Post}>
      <div className={classes.Image}>
        <img src={props.coverImages[0].url} />
      </div>
      <div className={classes.Text}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <Link to={`Event/${props.slug}`} className={classes.btn}>
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default Post;
