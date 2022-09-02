import Clubs from "../../components/Section/Clubs/Clubs";
import Events from "../../components/Section/Events/Events";
import Faculty from "../../components/Section/Faculty/Faculty";
import Student from "../../components/Section/Students/Students";
import classes from "./Section.module.css";
import { useEffect, useState } from "react";
import { request } from "graphql-request";

interface Props {
  id: string;
}

const Section = (props: Props) => {
  const [clubs, setClubs] = useState<Array<any>>([]);
  const [posts, setPosts] = useState<Array<any>>([]);
  const [faculty, setFaculty] = useState<Array<any>>([]);
  const [students, setStudents] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { eventPosts } = await request(
        "https://api-ap-south-1.hygraph.com/v2/cl7kbi73z08wj01um1ch27f5e/master",
        `
      {
        eventPosts {
          title
          slug
          description
        }
      }
    `
      );

      console.log(eventPosts);

      setPosts(eventPosts);
    };

    fetchProducts();
  }, []);

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
