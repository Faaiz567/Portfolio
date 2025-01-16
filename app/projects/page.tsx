import Link from 'next/link'

const projects = [
  {
    title: 'Color Picker',
    description: "ColorCraft is your go-to tool for exploring, generating, and crafting beautiful colors and gradients. Whether you're a designer, developer, or creative enthusiast, our intuitive tools will help you find the perfect colors for your next project.",
    link: 'https://color-craft-jade.vercel.app/',
  },
  {
    title: 'Plant Doctor and Identifier',
    description: 'Plant Doctor is an intuitive plant identification tool that allows users to upload or take a photo of a plant for instant identification and detailed information. It also detects plant diseases from images, offering insights and solutions for plant care.',
    link: 'https://ai-powered-garden.vercel.app/',
  },
  {
    title: 'Internet Speed Tester',
    description: "Internet Speed Tester is a reliable tool that accurately measures your internet's upload, download, and latency speeds. Built with Next.js and Tailwind CSS, it provides a fast and responsive user experience for checking your network performance",
    link: 'https://internet-speed-tester-two.vercel.app/',
  },
   {
     title: 'Plant Ecomerce Website Test',
     description: 'A tranquil online destination offering a curated selection of plants and flowers, featuring an immersive garden-themed design that welcomes visitors into a natural sanctuary.',
     link: 'https://plants-website-silk.vercel.app/',
   },
  // {
  //   title: 'Project 2',
  //   description: 'Description of Project 2',
  //   link: 'https://project2.vercel.app',
  // },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#00E5FF] mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#2A2D35] rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E5FF] hover:underline"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

