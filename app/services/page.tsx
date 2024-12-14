export default function Services() {
    const services = [
      {
        title: 'Frontend Development',
        description: 'Creating responsive and visually appealing user interfaces using React and Next.js.',
      },
      {
        title: 'Backend Development',
        description: 'Building robust server-side applications and APIs.',
      },
      {
        title: 'Full-Stack development',
        description: 'Full-stack development using Next.js, TypeScript, Tailwind CSS, and backend technologies like Node.js and Prisma allows for building complete, scalable, and high-performance web applications.',
      },
      {
        title: 'UI/UX Design',
        description: 'Crafting intuitive and engaging user experiences with a focus on usability and aesthetics.',
      },
    ]
  
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#00E5FF] mb-8">My Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#2A2D35] rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#00E5FF] mb-4">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  