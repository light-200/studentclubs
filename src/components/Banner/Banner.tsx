import classes from "./Banner.module.css";

interface Props {
  images?: Array<string>;
}

const Banner = (props: Props) => {
  return (
    <div className={classes.Banner}>
      <div className={classes.Text}>
        <span className={classes.MainHeading}>Student</span>
      </div>
      <div className={classes.Carousel}>carousel</div>
    </div>
  );
};

export default Banner;
