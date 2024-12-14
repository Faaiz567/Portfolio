import { notFound } from "next/navigation";
import Link from "next/link";

type BlogPostType = {
  title: string;
  content: string;
  date: string;
  heading: string;
  slug: string;
};

const blogPosts: BlogPostType[] = [
  {
    title: "Getting Started with Next.js 15 ",
    content:
      "Next.js is a powerful React framework that enables developers to build fast and scalable web applications with ease. It offers features like server-side rendering (SSR), static site generation (SSG), and API routes, allowing for improved performance and SEO optimization. With automatic code splitting, Next.js ensures faster loading times by serving only the necessary JavaScript for each page. It also supports built-in routing, making navigation simple and intuitive. Developers can use Next.js for both static and dynamic sites, providing flexibility for a wide range of projects. Its tight integration with React and advanced features make it a popular choice for modern web development.",
    date: "October 10, 2024",
    heading: "What is Next.js and why we use it.",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "The Power of Tailwind CSS",
    content:
      "Tailwind CSS is a utility-first CSS framework that allows developers to create custom designs quickly without writing custom CSS. It provides a wide range of pre-built utility classes for styling, enabling rapid prototyping and design consistency. With Tailwind, developers can easily apply responsive, hover, and focus styles directly in the HTML, streamlining the development process. It promotes the use of reusable components, reducing the need for lengthy custom styles. Tailwind’s configuration options let you customize the design system, making it highly adaptable to different project requirements. Its efficiency, flexibility, and developer-friendly approach make it a popular choice for modern web design.",
    date: "April, 2020",
    heading: "Tailwind Power",
    slug: "power-of-tailwind-css",
  },
  {
    title: "What is Typescript and why we use it",
    content:
      "TypeScript is a superset of JavaScript that adds static typing to the language, allowing developers to define types for variables, function parameters, and return values. It helps catch errors at compile time, improving code quality and reducing runtime bugs. TypeScript also offers features like interfaces, enums, and generics, which enhance the maintainability and scalability of large codebases. It integrates seamlessly with JavaScript and supports modern ECMAScript features, making it ideal for building robust applications. Developers use TypeScript to improve code readability, reduce debugging time, and enhance collaboration on large projects. It’s especially popular for complex frontend applications and backend systems.",
    date: "June 20, 2023",
    heading: "Advantages of Typescript",
    slug: "the-typescript",
  },
  {
    title: "What is the role of best UI/UX in development",
    content:
      "UI/UX design is crucial in development because it directly impacts user satisfaction and engagement. A well-designed user interface (UI) ensures that the application is visually appealing and easy to navigate, while a thoughtful user experience (UX) ensures that the app is intuitive, efficient, and meets the needs of users. Good UI/UX design helps reduce friction, making interactions seamless and enjoyable, leading to higher user retention and reduced bounce rates. It also plays a significant role in accessibility, ensuring that everyone can use the application regardless of their abilities. Ultimately, investing in UI/UX design leads to improved brand perception, increased conversions, and a better overall user experience.",
    date: "August 15, 2023",
    heading: "Good UI/UX design",
    slug: "ui-ux-importance",
  },
  {
    title: "Update your skills ",
    content:
      "In today’s fast-paced tech world, continuously updating your skills is crucial for staying relevant as a web developer. Embracing AI and machine learning tools can help you build smarter applications that offer personalized experiences. Learning Progressive Web Apps (PWAs) is a great way to create seamless, app-like experiences directly in the browser. With the growing popularity of JAMstack, mastering this architecture will enable you to build faster, more secure websites by decoupling the frontend and backend. Additionally, understanding WebAssembly allows you to run high-performance code in the browser, enhancing your web applications’ capabilities. By staying up-to-date with the latest tools and technologies, you can ensure that your skills remain sharp, relevant, and in demand.",
    date: "November 5, 2023",
    heading: "Continuously updating your skills",
    slug: "update-skills",
  },
];

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // Find the post based on the slug
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1E2126] pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#2A2D35] rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-[#00E5FF]">
              {post.title}
            </h1>
            <p className="text-gray-400 text-sm mb-4">{post.date}</p>
            <h3 className="text-xl mb-3 font-bold text-[#00E5FF]">
              {post.heading}
            </h3>
            <div className="prose prose-invert max-w-none">
              <p>{post.content}</p>
            </div>
          </div>
        </article>
        <div className="mt-8">
          <Link
            href="/blog"
            className="text-[#00E5FF] hover:text-white transition-colors duration-300 font-medium"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
