// import classes from "./Post.module.css";
import Posts from "../../types/posts";

const Post = (props: Posts) => {
  return (
    <div className="mt-4">
      <div className="w-11/12 sm:w-11/12 mx-2 border-2 border-gray-200 relative shadow-2xl">
        <div className="h-72 w-full overflow-hidden relative flex justify-center items-center">
          <img className="h-full absolute " src={props.coverImages[0].url} />
        </div>
        <div className="text-lg p-4 h-72">
          <h1 className="text-xl font-bold">{props.title}</h1>

          <p className="mt-1">{props.description}</p>
          <div className="">
            <div className="cursor-pointer  bg-cyan-500 w-28 text-gray-100 rounded-xl p-2 hover:bg-cyan-900 absolute bottom-3  ...">
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
