import Clubs from "../../components/Section/Clubs/Clubs";
import Events from "../../components/Section/Events/Events";
import Faculty from "../../components/Section/Faculty/Faculty";
import Student from "../../components/Section/Students/Students";
import classes from "./Section.module.css";
import { useEffect, useState } from "react";
import Post from "../../types/posts";
import { request } from "graphql-request";

interface Props {
  id: string;
}

const Section = (props: Props) => {
  const [clubs, setClubs] = useState<Array<any>>([]);
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [faculty, setFaculty] = useState<Array<any>>([]);
  const [students, setStudents] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { eventPosts } = await request(
        "https://api-ap-south-1.hygraph.com/v2/cl7kbi73z08wj01um1ch27f5e/master",
        `
      {
        eventPosts {
          title
          description
          coverImages{
            url
          }
        }
      }
    `
      );

      console.log(eventPosts);

      setPosts(eventPosts);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchStudentData = async () => {
      const { studentsData } = await request(
        "https://api-ap-south-1.hygraph.com/v2/cl7kbi73z08wj01um1ch27f5e/master",
        `
        {
          studentsData{
            name
            title
            session
          }
        }

    `
      );

      console.log(studentsData);

      setStudents(studentsData);
    };

    fetchStudentData();
  }, []);

  useEffect(() => {
    const fetchFacultyData = async () => {
      const { facultiesData } = await request(
        "https://api-ap-south-1.hygraph.com/v2/cl7kbi73z08wj01um1ch27f5e/master",
        `
        {
          facultiesData{
            name
            sacPosition
            collegePosition
          }
        }

    `
      );

      console.log(facultiesData);

      setFaculty(facultiesData);

      fetchFacultyData();
    };
  }, []);

  useEffect(() => {
    const fetchClubsData = async () => {
      const { clubsData } = await request(
        "https://api-ap-south-1.hygraph.com/v2/cl7kbi73z08wj01um1ch27f5e/master",
        `
        {
          clubsData{
            clubName
            clubAim
          }
        }

    `
      );

      console.log(clubsData);

      setFaculty(clubsData);

      fetchClubsData();
    };
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
