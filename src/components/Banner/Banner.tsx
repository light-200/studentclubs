import classes from "./Banner.module.css";
import Slider from "../../containers/Slider/Slider";
interface Props {
  images?: Array<string>;
}

const Banner = (props: Props) => {
  return (
    <div className={classes.Banner}>
      <div className={classes.Text}>
        <span className={classes.MainHeading}>Student</span>
        <span className={classes.SecondHeading}>Activities Cell</span>
        <span className={classes.Description}>
          Fostering the engagement of students in co-curricular and
          extracurricular activities, and to inculcate in them the urge to
          analyse, explore, build and project innovation as a community
          comprising members from varied backgrounds
        </span>
      </div>
      <div className={classes.Carousel}>
        <Slider />
      </div>
    </div>
  );
};

export default Banner;
