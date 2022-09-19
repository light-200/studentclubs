import { useEffect, useState } from "react";
import { Link, Params, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { request } from "graphql-request";
import Logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import Posts from "../../types/posts";
import Navbar from "../../components/Navigation/Navbar";

const EventPage = () => {
  const [post, setPost] = useState<Posts>();

  let postContent: any;
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
                html
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

  if (post) {
    postContent = post.content ? post.content.html : post.description;
  }

  return (
    <>
      <div className="fixed w-full z-50">
        <div className={"navbar-active"}>
          <Link to={"/"}>
            <img className="w-20" src={Logo} />
          </Link>
          <div className="text-l font-bold text-center md:text-4xl">
            Govind Ballabh Pant Institute Of Engineering And Technology
            <p className="text-base md:text-2xl ">
              An Autonomous Institute Of Government Of Uttarakhand
            </p>
          </div>
          <div className="pd-2 hidden sm:block">
            <img className="w-8 m-2 md:w-110" src={facebook} alt="" />
            <img className="w-8 m-2 md:w-110" src={instagram} alt="" />
          </div>
        </div>
      </div>
      {post ? (
        <div className="container w-full md:max-w-6xl mx-auto pt-40">
          <div className="w-full px-4 md:px-6 text-gray-800 leading-normal">
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-5 pb-8 text-xl md:text-2xl">
              {post.title}
            </h1>
            <div className="w-full mb-5">
              <img src={post.coverImages[0].url} />
            </div>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{
                __html: postContent,
              }}
            />
          </div>
        </div>
      ) : (
        <div className="h-screen grid place-items-center">
          <h1 className="font-bold">loading...</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default EventPage;
