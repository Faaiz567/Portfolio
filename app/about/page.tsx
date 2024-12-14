export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#00E5FF] mb-8">About Me</h1>
        <div className="bg-[#2A2D35] rounded-lg p-8"
        style={{
          filter: 'drop-shadow(0px 0px 4px #40E0D0)',
        }}>
          <p className="text-gray-300 mb-4">
            As a highly skilled full-stack developer, I bring expertise in
            JavaScript, TypeScript, HTML, CSS, and modern frameworks such as
            React and Next.js. I am passionate about creating responsive,
            visually engaging, and high-performance user interfaces that enhance
            user experiences. With a strong command of Tailwind CSS, I ensure
            that every design is implemented with precision and attention to
            detail, delivering aesthetically pleasing and functional results.
          </p>
          <p className="text-gray-300 mb-4">
            In addition to my front-end skills, I have a solid foundation in
            backend development, enabling me to build scalable server-side
            applications and integrate robust APIs. My experience spans
            developing seamless, end-to-end solutions that prioritize
            efficiency, maintainability, and performance. By combining technical
            expertise with a deep understanding of UI/UX principles, I strive to
            deliver applications that exceed user and business expectations.
          </p>
          <p className="text-gray-300 mb-4">
            Driven by curiosity and a passion for innovation, I am committed to
            staying ahead in the rapidly evolving tech landscape. Whether it’s
            collaborating with talented teams or contributing to groundbreaking
            projects, I am dedicated to building modern, user-centric web
            applications from concept to deployment.
          </p>
          <h2 className="text-2xl font-bold text-[#00E5FF] mt-8 mb-4">
            Education
          </h2>
          <p className="text-gray-300">Artificial Intelligence, 2024</p>
          <p className="text-gray-300">
            Saheed Zulfiqar Ali Bhutto collage, 2nd Year
          </p>
          <h2 className="text-2xl font-bold text-[#00E5FF] mt-8 mb-4">
            Skills
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>HTML, CSS, JavaScript, and TypeScript</li>
            <li>React and Next.js</li>
            <li>Tailwind CSS and Vanilla CSS</li>
            <li>Frontend and Backend development</li>
            <li>Full-Stack Developer</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design Principles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
