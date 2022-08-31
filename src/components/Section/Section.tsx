import classes from "./Section.module.css";

interface Props {
  id: string;
}

const Section = (props: Props) => {
  let Section;
  switch (props.id) {
    case "event":
      Section = "Event";
      break;
    case "student":
      Section = "Student";
      break;
    case "faculty":
      Section = "Faculty";
      break;
    case "clubs":
      Section = "Clubs";
      break;

    default:
      Section = "Event";
      break;
  }

  return <div className={classes.Section}>{Section}</div>;
};

export default Section;
