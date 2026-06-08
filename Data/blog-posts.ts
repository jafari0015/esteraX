export type LocalBlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  categories: { _id: string; title: string }[];
  readingTime: number;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const localBlogPosts: LocalBlogPost[] = [
  {
    _id: "local-website-strategy",
    title: "How a strong website turns attention into real customer action",
    slug: { current: "strong-website-customer-action" },
    excerpt:
      "A professional website should guide visitors, explain the offer clearly, and make it easy for people to contact, buy, book, or request a service.",
    imageUrl: "/blog-website-strategy.svg",
    publishedAt: "2026-05-28",
    categories: [{ _id: "web", title: "Web Development" }],
    readingTime: 4,
    sections: [
      {
        heading: "Clarity comes before design",
        paragraphs: [
          "A strong website starts by making the offer easy to understand. Visitors should quickly know what the business does, who it helps, and what action they can take next.",
          "Good design supports that clarity with structure, spacing, speed, and content that feels direct instead of crowded.",
        ],
      },
      {
        heading: "Every page needs a job",
        paragraphs: [
          "Homepages introduce trust, service pages explain value, and contact pages remove friction. When each page has a purpose, the website becomes easier to use and easier to improve.",
        ],
      },
    ],
  },
  {
    _id: "local-mobile-planning",
    title: "What to plan before starting a mobile app project",
    slug: { current: "mobile-app-project-planning" },
    excerpt:
      "A successful app starts with clear user flows, core features, launch priorities, and a realistic support plan.",
    imageUrl: "/blog-mobile-planning.svg",
    publishedAt: "2026-05-12",
    categories: [{ _id: "mobile", title: "Mobile Development" }],
    readingTime: 5,
    sections: [
      {
        heading: "Start with the core journey",
        paragraphs: [
          "Before development starts, define the main thing users need to complete inside the app. That journey should shape the first version more than a long feature list.",
          "Planning around the core journey keeps the app focused, easier to test, and easier to launch.",
        ],
      },
      {
        heading: "Think beyond the first release",
        paragraphs: [
          "Apps need updates, analytics, bug fixes, and user feedback after launch. A realistic support plan helps the product grow without becoming messy.",
        ],
      },
    ],
  },
  {
    _id: "local-custom-software",
    title: "Custom software can remove daily manual work",
    slug: { current: "custom-software-remove-manual-work" },
    excerpt:
      "Dashboards, portals, booking tools, and automations help teams reduce repeated tasks and organize business data in one place.",
    imageUrl: "/blog-custom-software.svg",
    publishedAt: "2026-04-22",
    categories: [{ _id: "software", title: "Software Development" }],
    readingTime: 4,
    sections: [
      {
        heading: "Software should match the workflow",
        paragraphs: [
          "The best internal tools are built around how a team already works. They reduce repeated steps, collect important data, and make routine decisions easier.",
          "A custom dashboard or portal can often replace scattered spreadsheets, messages, and manual reports.",
        ],
      },
      {
        heading: "Small automations add up",
        paragraphs: [
          "Even simple automations can save hours when they run every day. The goal is not complexity; the goal is reliable support for the work your team already does.",
        ],
      },
    ],
  },
  {
    _id: "local-hosting-maintenance",
    title: "Why hosting and maintenance matter after launch",
    slug: { current: "hosting-maintenance-after-launch" },
    excerpt:
      "Launch day is only the start. Updates, backups, performance checks, security basics, and technical support keep products healthy.",
    imageUrl: "/blog-hosting-maintenance.svg",
    publishedAt: "2026-04-08",
    categories: [{ _id: "hosting", title: "Hosting" }],
    readingTime: 3,
    sections: [
      {
        heading: "A live product needs care",
        paragraphs: [
          "After a site or app goes live, the work shifts from building to keeping it reliable. Hosting, monitoring, backups, and updates protect the investment.",
          "Maintenance also makes future improvements easier because the product stays organized and healthy.",
        ],
      },
      {
        heading: "Performance affects trust",
        paragraphs: [
          "Fast loading, stable uptime, and clear error handling make users feel more confident. Those details matter as much as the visible design.",
        ],
      },
    ],
  },
  {
    _id: "local-ux-design",
    title: "Design choices that make digital products easier to use",
    slug: { current: "design-choices-easier-products" },
    excerpt:
      "Clear navigation, readable content, focused screens, and simple actions make a website or app feel professional before users see the code.",
    imageUrl: "/blog-ux-design.svg",
    publishedAt: "2026-03-18",
    categories: [{ _id: "design", title: "UI/UX Design" }],
    readingTime: 4,
    sections: [
      {
        heading: "Simple screens are stronger",
        paragraphs: [
          "Users should not have to hunt for the next step. Clear labels, predictable layout, and focused actions make digital products feel easier from the first visit.",
          "Good UI/UX design removes confusion before it becomes a support problem.",
        ],
      },
      {
        heading: "Consistency builds confidence",
        paragraphs: [
          "When buttons, forms, spacing, and page structure behave consistently, people learn the product faster and make fewer mistakes.",
        ],
      },
    ],
  },
];

export function getLocalBlogPost(slug: string) {
  return localBlogPosts.find((post) => post.slug.current === slug);
}

export function toBlogCard(post: LocalBlogPost): Blog {
  return {
    _id: post._id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    mainImage: {
      asset: {
        _id: post._id,
        url: post.imageUrl,
      },
      alt: post.title,
    },
    publishedAt: post.publishedAt,
    categories: post.categories,
    readingTime: post.readingTime,
  };
}
