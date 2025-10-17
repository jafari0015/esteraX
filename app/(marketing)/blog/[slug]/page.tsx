// app/(...)/BlogDetail.tsx  (or page component file)
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/libs/sanity";

type BlogDetailProps = { params: { slug: string } };

// Portable Text components mapping
const components = {
  types: {
    image: ({ value }: any) => {
      const src = value?.asset?.url;
      if (!src) return null;
      return (
        <div className="my-6">
          <div className="overflow-hidden rounded-xl mb-2">
            <img
              src={src}
              alt={value.alt || "Blog image"}
              width={1200}
              height={600}
              className="rounded-xl w-full object-cover"
            />
          </div>
          {value.caption && (
            <p className="text-base text-foreground mt-2 text-center">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    gallery: ({ value }: any) => {
      if (!Array.isArray(value?.images)) return null;
      return (
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {value.images.map((img: any, i: number) => (
            <div key={i}>
              <img
                src={img.asset?.url}
                alt={img.alt || `gallery-${i}`}
                width={600}
                height={400}
                className="rounded-lg w-full object-cover"
              />
              {img.caption && (
                <p className="text-sm text-foreground mt-1 text-center">
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      );
    },
    video: ({ value }: any) => {
      if (!value?.url) return null;
      return (
        <div className="my-6">
          <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden">
            <iframe
              src={value.url}
              title={value.caption || "Video"}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
          {value.caption && (
            <p className="text-sm text-foreground mt-2 text-center">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    code: ({ value }: any) => (
      <pre className="bg-gray-900 text-foreground p-4 rounded-lg my-6 overflow-x-auto">
        <code>{value.code}</code>
      </pre>
    ),
    callout: ({ value }: any) => {
      const style = value?.style || "default";
      const bg =
        style === "info"
          ? "bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100"
          : style === "success"
            ? "bg-green-100 dark:bg-green-800 text-green-900 dark:text-green-100"
            : "bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100";

      return (
        <div className={`my-6 p-4 rounded-lg ${bg}`}>
          {/* The body is usually PortableText itself */}
          <PortableText value={value.body} components={components} />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl md:text-5xl font-semibold mb-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-3xl font-semibold mb-2">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 text-xl leading-relaxed mt-5">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 pl-4 italic my-4">{children}</blockquote>
    ),
  },
  marks: {
    // Links & emphasis
    link: ({ children, value }: any) => {
      const href = value?.href || "#";
      return (
        <a
          href={href}
          target={href && href.startsWith("http") ? "_blank" : undefined}
          rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="underline"
        >
          {children}
        </a>
      );
    },
    // Add other marks (code, strong, em) will be default-HTML.
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 text-xl mb-4">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 text-xl">{children}</ol>,
  },
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  // GROQ: fetch the post and expand author reference to include name, image, bio, slug
  const post = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      "author": author->{name, "image": image.asset->url, bio, "slug": slug.current},
      mainImage{
        asset->{url},
        alt,
        caption
      },
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->{
            url
          }
        }
      },
      publishedAt,
      readingTime,
      categories[]->{title, _id},
      excerpt,
    }`,
    { slug: params.slug }
  );

  if (!post) return <div>Post not found</div>;

  return (
    <section className="min-h-screen bg-primary pt-40">
      <div className="max-w-6xl mx-auto px-6 md:pl-24">
        <header className="mb-10 text-center">
          <div className="flex justify-center gap-2 mb-5">
            {post.categories?.map((cat: any) => (
              <span
                key={cat._id}
                className="text-sm tracking-widest border border-white rounded-full py-2 px-2 uppercase text-foreground font-semibold"
              >
                {cat.title}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">{post.title}</h1>
          {post.author?.name && (
            <div className="flex items-center justify-center gap-3">
              {post.author.image && (
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              )}
              <p className="text-base md:text-lg font-semibold text-foreground/90 tracking-[2px]">written By  {post.author.name}</p>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className="overflow-hidden rounded-2xl mb-12 shadow-lg">
            <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={1200}
              height={600}
              className="rounded-xl w-full object-cover"
            />
            {post.mainImage.caption && (
              <p className="text-sm text-foreground/80 text-center mt-2">{post.mainImage.caption}</p>
            )}
          </div>
        )}

        {/* Body Content */}
        <article className="prose prose-invert mx-auto max-w-6xl text-foreground ">
          <PortableText value={post.body} components={components} />
        </article>
      </div>
    </section>
  );
}
