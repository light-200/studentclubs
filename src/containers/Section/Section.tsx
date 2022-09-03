import Clubs from "../../components/Section/Clubs/Clubs";
import Events from "../../components/Section/Events/Events";
import Faculty from "../../components/Section/Faculty/Faculty";
import Student from "../../components/Section/Students/Students";
import classes from "./Section.module.css";
import { useEffect, useState } from "react";
import Post from "../../types/posts";

interface Props {
  id: string;
}

const Section = (props: Props) => {
  const [clubs, setClubs] = useState<Array<any>>([]);
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [faculty, setFaculty] = useState<Array<any>>([]);
  const [students, setStudents] = useState<Array<any>>([]);

  useEffect(() => {
    setStudents(["Lorem", "sit amet", "inventore et"]);
  }, []);

  useEffect(() => {
    setFaculty(["Lorem", "sit amet", "inventore et"]);
  }, []);

  useEffect(() => {
    setClubs([
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, hic.",
      "Lorem ipsum dolor sit ametfuga quasi itaque qui voluptates.",
      "Lorem tem ut. Tempore nobis magnam quibusdam quaerat!",
    ]);
  }, []);

  useEffect(() => {
    setPosts([
      {
        title: "Independence day celebration",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur magnam expedita architecto tempora qui corrupti velit. Dolore natus autem quos, ab modi distinctio quae ad laudantium nulla excepturi accusantium! Aspernatur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, ab.",
        image: "https://source.unsplash.com/random/400x400/?india",
      },
      {
        title: "Annual day celebration",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur magnam expedita architecto tempora qui corrupti velit. Dolore natus autem quos, ab modi distinctio quae ad laudantium nulla excepturi accusantium! Aspernatur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, ab.",
        image: "https://source.unsplash.com/random/400x400/?college",
      },
      {
        title: "Teachers day celebration",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur magnam expedita architecto tempora qui corrupti velit. Dolore natus autem quos, ab modi distinctio quae ad laudantium nulla excepturi accusantium! Aspernatur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, ab.",
        image: "https://source.unsplash.com/random/400x400/?teachers",
      },
    ]);
  }, []);

  let Section;
  switch (props.id) {
    case "event":
      Section = <Events posts={posts} />;
      break;
    case "student":
      Section = <Student students={students} />;
      break;
    case "faculty":
      Section = <Faculty faculty={faculty} />;
      break;
    case "clubs":
      Section = <Clubs clubs={clubs} />;
      break;

    default:
      Section = "Event";
      break;
  }

  return <div className={classes.Section}>{Section}</div>;
};

export default Section;
