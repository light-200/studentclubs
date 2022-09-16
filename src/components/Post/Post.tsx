import Posts from "../../types/posts";
import { Link } from "react-router-dom";

interface props {
  post: Posts;
  parent: string;
}

const Post = (props) => {
  return (
    <div className="mt-4 w-full">
      <div className="w-full relative shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden rounded-sm">
        {props.coverImages && (
          <div className="h-72 w-full overflow-hidden relative grid place-items-center">
            <div className="h-full w-full absolute z-20 bg-gradient-to-down from-black via-white to-black"></div>
            <img
              className="absolute object-cover h-full w-full z-10"
              src={props.coverImages[0].url}
            />
          </div>
        )}
        <div className="text-lg p-4 h-64">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="mt-1 text-ellipsis line-clamp-2">{props.description}</p>
          <Link to={`Event/${props.slug}`}>
            <div className="cursor-pointer  bg-cyan-500 w-28 text-gray-100 rounded-sm p-2 hover:bg-cyan-900 absolute bottom-3">
              Read More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
