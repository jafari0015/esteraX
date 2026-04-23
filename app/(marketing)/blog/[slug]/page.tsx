import type { Metadata } from "next";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import { client } from "@/libs/sanity";

type BlogDetailProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const post = await client.fetch<BlogPost>(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      excerpt,
      mainImage{
        asset->{url},
        alt
      },
      publishedAt,
      categories[]->{title}
    }`,
    { slug: params.slug }
  );

  if (!post) {
    return {
      title: "Blog Post Not Found - UstadLink",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - UstadLink Blog`,
    description: post.excerpt || `Read ${post.title} on the UstadLink blog. Discover insights on AI, technology, and innovation.`,
    keywords: [
      post.title,
      "UstadLink Blog",
      "AI Blog",
      "Technology Blog",
      ...(post.categories?.map(cat => cat.title) || [])
    ],
    openGraph: {
      title: `${post.title} - UstadLink Blog`,
      description: post.excerpt || `Read ${post.title} on the UstadLink blog. Discover insights on AI, technology, and innovation.`,
      url: `https://www.UstadLink.com/blog/${params.slug}`,
      siteName: "UstadLink",
      images: post.mainImage?.asset?.url ? [
        {
          url: post.mainImage.asset.url,
          width: 1200,
          height: 630,
          alt: post.mainImage.alt || post.title,
        },
      ] : [
        {
          url: "/bg-our-work.svg",
          width: 1200,
          height: 630,
          alt: "UstadLink Blog Post",
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - UstadLink Blog`,
      description: post.excerpt || `Read ${post.title} on the UstadLink blog. Discover insights on AI, technology, and innovation.`,
      creator: "@UstadLink",
      images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : ["/bg-our-work.svg"],
    },
  };
}

interface CalloutValue {
  style?: "info" | "success" | "warning" | string;
  body?: PortableTextBlock[];
}
interface BlogPost {
  title: string;
  author?: Author;
  mainImage?: ImageValue;
  body: PortableTextBlock[];
  publishedAt?: string;
  readingTime?: number;
  categories?: Category[];
  excerpt?: string;
}
// --- PortableText Components ---
const components = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      const src = value?.asset?.url;
      if (!src) return null;
      return (
        <div className="my-6">
          <div className="overflow-hidden rounded-xl mb-2">
            <Image
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
    gallery: ({ value }: { value: GalleryValue }) => {
      if (!Array.isArray(value?.images)) return null;
      return (
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {value.images.map((img, i) => (
            <div key={i}>
              <Image
                src={img.asset?.url || ""}
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
    video: ({ value }: { value: VideoValue }) => {
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
    code: ({ value }: { value: CodeValue }) => (
      <pre className="bg-gray-900 text-foreground p-4 rounded-lg my-6 overflow-x-auto">
        <code>{value.code}</code>
      </pre>
    ),
    callout: ({ value }: { value: CalloutValue }) => {
      const style = value?.style || "default";
      const bg =
        style === "info"
          ? "bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100"
          : style === "success"
            ? "bg-green-100 dark:bg-green-800 text-green-900 dark:text-green-100"
            : "bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100";

      return (
        <div className={`my-6 p-4 rounded-lg ${bg}`}>
          <PortableText value={value.body || []} components={components} />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: BlockProps) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }: BlockProps) => <h2 className="text-3xl md:text-5xl font-semibold mb-3">{children}</h2>,
    h3: ({ children }: BlockProps) => <h3 className="text-3xl font-semibold mb-2">{children}</h3>,
    normal: ({ children }: BlockProps) => <p className="mb-4 text-xl leading-relaxed mt-5">{children}</p>,
    blockquote: ({ children }: BlockProps) => (
      <blockquote className="border-l-4 pl-4 italic my-4">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: LinkProps) => {
      const href = value?.href || "#";
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: BlockProps) => <ul className="list-disc pl-6 text-xl mb-4">{children}</ul>,
    number: ({ children }: BlockProps) => <ol className="list-decimal pl-6 mb-4 text-xl">{children}</ol>,
  },
};

// --- Page Component ---
export default async function BlogDetail({ params }: BlogDetailProps) {
  const post = await client.fetch<BlogPost>(
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
            {post.categories?.map((cat) => (
              <span
                key={cat._id}
                className="text-sm tracking-widest border border-white rounded-full py-2 px-2 uppercase text-foreground font-semibold"
              >
                {cat.title}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            {post.title}
          </h1>
          {post.author?.name && (
            <div className="flex items-center justify-center gap-3">
              {post.author.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              )}
              <p className="text-base md:text-lg font-semibold text-foreground/90 tracking-[2px]">
                Written by {post.author.name}
              </p>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className="overflow-hidden rounded-2xl mb-12 shadow-lg">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={1200}
              height={600}
              className="rounded-xl w-full object-cover"
            />
            {post.mainImage.caption && (
              <p className="text-sm text-foreground/80 text-center mt-2">
                {post.mainImage.caption}
              </p>
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
