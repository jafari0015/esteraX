import React from "react";
import ImageGallery from "@/components/block/case-studies";
import WorkComponents from "@/components/ui/ou-work";
import GridWorkSection from "@/components/ui/work-grid-section";
import resources from "@/Data/resources";
const BlogList = () => {
  return (
    <section>
      <section className="relative">
        <img
          src="/bg-our-work.svg"
          alt="This is the background"
          className="w-full h-[60vh] absolute inset-0 object-cover"
        />
        <div className="relative text-foreground pl-6 xl:gap-36 pt-28  md:pl-26 lg:pl-40">
          <div>
            <h3 className="text-lg md:text-2xl uppercase tracking-wide mb-4">
              Welcome to the blog.
            </h3>
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-bold tracking-wider mb-6 max-w-6xl">
              "Explore the latest insights, tutorials, and stories from the
              world of web development. Stay inspired, stay ahead, and discover
              how ideas turn into code."
            </h1>
          </div>
        </div>
      </section>
      <div className="min-h-screen mt-40 border-l-">
        <div className="secondary ">
          <WorkComponents
            imageSrc="/person.webp"
            workItems={[
              {
                subTitle: "AI for marketing",
                title: "Last mile route optimisation for DFS",
                description:
                  "Satalia helped DFS transform their last-mile delivery offering with last-mile delivery technology.",
                percentage: "18%",
                subDescription: "Total Saving across the workstream",
              },
            ]}
          />
        </div>
        <div>
          <GridWorkSection
            resources={resources}
            containerClassName="lg:px-25 md:px-18"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogList;
