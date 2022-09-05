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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui ut
          sit blanditiis cum nihil placeat autem corrupti velit soluta hic earum
          ratione dolor excepturi, dignissimos mollitia ab, accusantium nobis
          facilis quam non sunt. Quae nam blanditiis eveniet ratione iure.
        </span>
      </div>
      <div className={classes.Carousel}>
        <Slider />
      </div>
    </div>
  );
};

export default Banner;
