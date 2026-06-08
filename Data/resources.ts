import { localBlogPosts } from "./blog-posts";

const resources = localBlogPosts.map((post) => ({
  date: new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  title: post.title,
  description: post.excerpt,
  imageUrl: post.imageUrl,
  link: `/blog/${post.slug.current}`,
}));

export default resources;
