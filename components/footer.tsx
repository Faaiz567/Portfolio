'use client'

import { Copy, Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import { FaSkype } from 'react-icons/fa';
import { useState } from 'react'

export default function Footer() {
  const [copySuccess, setCopySuccess] = useState<string | null>(null)

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(`${type} copied!`)
      setTimeout(() => setCopySuccess(null), 2000)
    } catch (err) {
      setCopySuccess('Failed to copy')
    }
  }

  return (
    <footer id="footer" className="bg-[#2A2D35] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Code Snippet Section */}
          <div>
            <pre className="bg-[#1E2126] p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`const developer = {
  name: 'Faaiz Ahmed',
  role: 'Full-Stack Developer',
  loves: ['Next.js', 'TypeScript', 'Tailwind',]
};`}
              </code>
            </pre>
          </div>

          {/* Contact and Social Section */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
              <div className="space-y-2">
                <button
                  onClick={() => handleCopy('03102289592', 'Phone number')}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#00E5FF] transition-colors w-full"
                >
                  <span>03102289592</span>
                  <Copy size={16} />
                </button>
                <button
                  onClick={() => handleCopy('Faaizahmed488@gmail.com', 'Email')}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#00E5FF] transition-colors w-full"
                >
                  <span>Faaizahmed488@gmail.com</span>
                  <Copy size={16} />
                </button>
                <p className="text-gray-300">Pakistan, Sindh, Karachi</p>
              </div>
            </div>

            {/* Follow Me Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
              <div className="flex space-x-4">

              <a href="https://www.facebook.com/profile.php?id=100095372565537" 
  target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:text-white transition-colors">
        <Facebook size={24} />
            </a>

                <a href="https://www.linkedin.com/in/faaiz-ahmed-524236305/" 
  target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>

                <a href="https://join.skype.com/invite/yqWdVUYGLKbn" 
  target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:text-white transition-colors">
                  <FaSkype size={24} />
                </a>

                <a href="https://www.instagram.com/faaizkhanswati789/" 
  target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>

                <a href="https://github.com/Faaiz567" 
  target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:text-white transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copy Success Message */}
        {copySuccess && (
          <div className="fixed bottom-4 right-4 bg-[#2aa5b3] text-white px-4 py-2 rounded-md shadow-lg">
            {copySuccess}
          </div>
        )}

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Faaiz Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

