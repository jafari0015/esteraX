import type { Metadata } from "next";
import Line from "@/components/Layout/line";
import DrawOutlineButton from "@/components/ui/draw-outline-button";
import { getSanityClient, isSanityConfigured } from "@/libs/sanity";
import { localBlogPosts, toBlogCard } from "@/Data/blog-posts";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { TfiTimer } from "react-icons/tfi";

export const metadata: Metadata = {
  title: "Blog - Diba Tech | Web, Mobile & Software Insights",
  description:
    "Explore Diba Tech insights on web development, mobile development, custom software, hosting, design, and digital product growth.",
  keywords: [
    "Diba Tech Blog",
    "Web Development Blog",
    "Mobile Development Blog",
    "Technology Blog",
    "Web Development",
    "Innovation",
    "Tech Insights",
    "Software Development",
    "Digital Transformation",
    "Hosting Solutions",
    "UI UX Design",
  ],
  openGraph: {
    title: "Blog - Diba Tech | Web, Mobile & Software Insights",
    description:
      "Explore Diba Tech insights on web development, mobile development, custom software, hosting, design, and digital product growth.",
    url: "https://www.dibatech.com/blog",
    siteName: "Diba Tech",
    images: [
      {
        url: "/bg-our-work.svg",
        width: 1200,
        height: 630,
        alt: "Diba Tech Blog - Technology Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Diba Tech | Web, Mobile & Software Insights",
    description:
      "Explore Diba Tech insights on web development, mobile development, custom software, hosting, design, and digital product growth.",
    creator: "@DibaTech",
    images: ["/bg-our-work.svg"],
  },
};


export default async function BlogList() {
  const sanityBlogs: Blog[] = isSanityConfigured()
    ? await getSanityClient().fetch(`*[_type == "blog"] | order(publishedAt desc){
        _id,
        title,
        slug,
        excerpt,
        mainImage{
          asset->{
            _id,
            url
          },
          alt,
          caption
        },
        publishedAt,
        categories[]->{
          title,
          _id
        },
        readingTime
      }`)
    : [];
  const blogs = sanityBlogs.length > 0 ? sanityBlogs : localBlogPosts.map(toBlogCard);
  return (
    <>
      <section className="relative min-h-[130vh]">
        <div>
          <Image
            src="/bg-our-work.svg"
            alt="This is the background"
            className="w-full h-full absolute inset-0 object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative text-foreground pl-6 xl:gap-36 pt-32 md:pt-60 md:pl-26 lg:pl-40">
          <div>
            <h3 className="text-lg md:text-2xl uppercase tracking-wide mb-4">
              Welcome to the blog.
            </h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-wider mb-6 max-w-2xl xl:max-w-6xl">
              &quot;Explore practical insights on websites, mobile apps, custom
              software, hosting, and how strong digital products help businesses
              grow.&quot;
            </h1>
          </div>
        </div>
        <div className="relative md:max-w-2xl float-right text-foreground text-4xl px-4 pt-20 md:pt-48 lg:pt-70 md:pr-20">
          <p>&quot;Good digital products make business feel simpler, faster, and easier for the people using them.&quot;</p>
          <h5 className="text-lg mt-5">Diba Tech Team</h5>
        </div>

      </section>
      <section className="bg-white text-secondary overflow-hidden">
        <div className="hidden md:flex h-full w-[0.5px] bg-secondary text-foreground absolute right-18 lg:right-25 overflow-hidden z-0"></div>
        <div className="hidden md:flex md:pl-18 lg:pl-25">
          <Line direction={"vertical"} color="black" thickness={1} />
        </div>
        <div className="hidden md:flex justify-center items-center py-8 lg:mx-25 md:mx-18  border border-t-0 border-black border-r-0">
          <h3 className="text-secondary text-center md:text-2xl xl:text-4xl">Fresh stories from the world of tech and innovation.</h3>
        </div>

        <div className="md:pl-25">
          <div className="grid md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog: Blog) => (
              <div
                key={blog._id}
                className="flex flex-col px-4 md:px-5 lg:pl-10 w-full items-center justify-center border-l-0  border border-black border-t-0 border-b-0 pt-20 relative"
              >
                <Link href={`/blog/${blog.slug.current}`} >
                  {blog.mainImage?.asset?.url && (
                    <Image
                      src={blog.mainImage.asset.url}
                      alt={blog.mainImage.alt || blog.title}
                      width={400}
                      height={400}
                      className="rounded-full w-60 h-60 md:w-52 md:h-52 lg:w-68 lg:h-68 xl:w-80 xl:h-80 object-cover hover:scale-105 transition-all duration-500"
                    />
                  )}</Link>
                <div className="mt-10 text-center md:text-left">
                  <span className="text-lg font-semibold pt-20 pb-5 text-secondary">
                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span> <br />
                  <span className="flex items-center gap-2">
                    <TfiTimer />
                    {blog.readingTime} minutes.
                  </span>
                  <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-8 md:h-[100px] text-black">
                    <Link href={`/blog/${blog.slug.current}`} className="hover:text-primary transition-colors duration-300 text-black">
                      {blog.title}
                    </Link>
                  </h1>
                  <p className="text-lg lg:text-xl lg:pt-10 md:h-[100px] text-black">
                    {blog?.excerpt}
                  </p>
                </div>
                <div className="self-start mt-10 mb-14">
                  <Link href={`/blog/${blog.slug.current}`}>
                    <DrawOutlineButton strokeColor="#000000">
                      Learn More
                    </DrawOutlineButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex py-12 md:mx-18 lg:mx-25 border border-b-0 border-black border-r-0">
        </div>
      </section></>
  );
};
