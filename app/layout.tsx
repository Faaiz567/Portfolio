import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Faaiz Portfolio",
  description: 'Personal portfolio website showcasing my work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-[#1E2126] text-white min-h-screen")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

