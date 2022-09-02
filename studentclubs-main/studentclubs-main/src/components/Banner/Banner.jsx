import classes from "./Banner.module.css";
import Slider from "../../containers/Slider/Slider";


const Banner = () => {
  return (
    <div className={classes.Banner}>
      <div className={classes.Text}>
        <span className={classes.MainHeading}>Student</span>
      </div>
      <div className={classes.Carousel}><Slider/></div>
    </div>
  );
};

export default Banner;
