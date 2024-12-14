import Link from "next/link";

const blogPosts = [
  {
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to build modern web applications with Next.js, a powerful React framework.",
    date: "October 10, 2024",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "The Power of Tailwind CSS",
    excerpt:
      "Discover how Tailwind CSS can streamline your styling workflow and boost productivity.",
    date: "April, 2020",
    slug: "power-of-tailwind-css",
  },
  {
    title: "What is Typescript and why we use it",
    excerpt:
      "Dive deep into TypeScript features and learn how to write more efficient and type-safe code.",
    date: "June 20, 2023",
    slug: "the-typescript",
  },
  {
    title: "What is the role of best UI/UX in development",
    excerpt:
      "Understand the importance of UI/UX design and learn to build interfaces that are both intuitive and aesthetically pleasing.",
    slug: "ui-ux-importance",
  },
  {
    title: "Update your skills ",
    excerpt:
      "Updating your skills keeps you relevant in the ever-evolving tech landscape, enabling you to build modern, efficient, and competitive applications.",
    slug: "update-skills",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#1E2126] pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#00E5FF] mb-8">Blog</h1>
        <div className="space-y-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#2A2D35] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-[#00E5FF] transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#00E5FF] hover:text-white transition-colors duration-300 font-medium"
                >
                  Read more<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
