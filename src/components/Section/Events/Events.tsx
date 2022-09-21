import Post from "../../Post/Post";
import Posts from "../../../types/posts";

interface Props {
  posts: Array<Posts>;
}

const Events = ({ posts }: Props) => {
  return (
    <div className="grid sm:grid-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      {posts.map((post: Posts, i) => {
        return (
          <Post
            parent="Event"
            description={post.description}
            title={post.title}
            image={post.image}
            coverImages={post.coverImages}
            slug={post.slug}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Events;
