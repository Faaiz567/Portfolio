import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { FaSkype } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-32 gap-12">
          {/* Left side content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl">Hello, It's Me</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Faaiz Ahmed
            </h1>
            <p className="text-2xl md:text-3xl">
              And I'm a{" "}
              <span className="text-[#00E5FF]">Fruntend Developer</span>
            </p>
            <p className="text-gray-400 max-w-xl">
              A passionate fruntend developer specializing in modern web
              technologies like Next.js, TypeScript, React, Tailwind CSS, and
              HTML. I create sleek, high-performing applications with a focus on
              innovation and user experience.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100095372565537"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#00E5FF] flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF] hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>

              <a
                href="https://join.skype.com/invite/yqWdVUYGLKbn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#00E5FF] flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF] hover:text-white transition-colors"
              >
                <FaSkype size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/faaiz-ahmed-524236305/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#00E5FF] flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF] hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://www.instagram.com/faaizkhanswati789/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#00E5FF] flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF] hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>

            {/* Download CV Button */}
            <a
              href="/faaiz.cv.pdf"
              download="Faaiz_Ahmed_CV.pdf"
              className="inline-block bg-[#00E5FF] text-black font-medium px-6 py-3 rounded-full hover:bg-[#00E5FF]/90 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Right side image */}
          <div className="flex-1 relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
              {/* Hexagon shape with glow effect */}
              <div className="absolute inset-0 bg-[#00E5FF] opacity-20 blur-xl rounded-full"></div>
              <div className="relative w-full h-full">
                <div
                  className="w-full h-full relative overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <Image
                    src="/faaiz.jpg"
                    alt="Faaiz Ahm0000"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Hexagon border */}
                <div
                  className="absolute inset-0 border-2 border-[#00E5FF]"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
