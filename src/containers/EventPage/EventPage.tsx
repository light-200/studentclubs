import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import classes from "./EventPage.module.css";
import request from "graphql-request";
import Posts from "../../types/posts";

const EventPage = () => {
  const [post, setPost] = useState<Posts>();

  const params = useParams();
  useEffect(() => {
    const fetchPost = async (slug: string | undefined) => {
      if (!slug) return;
      const { eventPost } = await request(
        "https://api-ap-south-1.hygraph.com/v2/cl7kbi73z08wj01um1ch27f5e/master",
        `{
            eventPost(where: {slug: "${slug}"}) {
              title
              description
              content{
                text
              }
              coverImages{
                url
              }
            }
        }`
      );

      setPost(eventPost);
    };

    fetchPost(params.slug);
  }, [params]);
  return post ? (
    <>
      <div className={classes.EventPage}>
        <h1>{post.title}</h1>
        <div className={classes.Img}>
          <img src={post.coverImages[0].url} />
        </div>
        <p>{post.content ? post.content.text : post.description}</p>
      </div>
    </>
  ) : (
    "loading"
  );
};

export default EventPage;
