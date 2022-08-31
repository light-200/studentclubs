import classes from "./Post.module.css";

interface Props {
  title: string;
  description: string;
  image: string;
}
const Post = (props: Props) => {
  return (
    <div className={classes.Post}>
      <div className={classes.Image}>{props.image}</div>
      <div className={classes.Text}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={classes.btn}>Read more...</div>
      </div>
    </div>
  );
};

export default Post;
