import classes from "./Namecard.module.css";

interface Props {
  title: string;
  name: string;
  batch: string;
  branch: string;
  image: "https://xsgames.co/randomusers/assets/avatars/pixel/10.jpg";
}
const Namecard = (props: Props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Image}>{props.image}</div>
      <div className={classes.Text}>
        <h1>{props.title}</h1>
        <p>{props.name}</p>
        <p>{props.batch}</p>
        <p>{props.branch}</p>
      </div>
    </div>
  );
};

export default Namecard;
