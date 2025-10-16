import { getPostBySlug } from "../../../../lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { SlCalculator } from "react-icons/sl";

type BlogDetailProps = { params: { slug: string } };

// Optional: map images or custom components in MDX
const components = {
  img: (props: any) => (
    <Image {...props} width={800} height={400} className="rounded-xl mb-6" />
  ),
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const post = await getPostBySlug(params.slug);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <SlCalculator className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="overflow-hidden rounded-2xl mb-12 shadow-lg">
          <img
            src={`/blog/${params.slug}.jpg`}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* MDX Content */}
        <article className="prose prose-invert dark:prose-invert mx-auto max-w-3xl text-foreground">
          <MDXRemote source={post.mdxSource} components={components} />
        </article>
      </div>
    </section>
  );
}
