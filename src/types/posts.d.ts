interface Posts {
  title: string;
  description: string;
  image?: string;
  coverImages?: any;
  slug: string;
  parent: string;
  content?: { html?: string; text?: string };
}

export default Posts;
