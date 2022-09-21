import Post from "../../Post/Post";

interface Props {
  clubs: Array<any>;
}

const Clubs = ({ clubs }: Props) => {
  console.log(clubs);
  return (
    <div className="grid grid-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
      {clubs.map((club: any, i) => {
        return (
          <Post
            parent="Club"
            key={i}
            description={club.description}
            title={club.title}
            slug={club.slug}
          />
        );
      })}
    </div>
  );
};

export default Clubs;
