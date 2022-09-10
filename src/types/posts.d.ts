interface Posts {
  title: string;
  description: string;
  image: string;
  coverImages: any;
  slug: string;
  content?: { text: string };
}

export default Posts;
