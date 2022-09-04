import classes from "./Namecard.module.css";

interface Props {
  title: string;
  name: string;
  batch?: string;
  branch?: string;
  image?: string;
}
const Namecard = (props: Props) => {
  return (
    <div className={classes.upCard}>
      <div className={classes.Card}>
        <div className={classes.Image}>
          <img
            src={
              props.image
                ? props.image
                : "https://xsgames.co/randomusers/assets/avatars/pixel/10.jpg"
            }
          />
        </div>
        <div className={classes.Text}>
          <h1>{props.title}</h1>
          <p>{props.name}</p>
          <p>{props.batch}</p>
          <p>{props.branch}</p>
        </div>
      </div>
    </div>
  );
};

export default Namecard;
