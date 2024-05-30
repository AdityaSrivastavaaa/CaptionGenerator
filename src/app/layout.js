import './globals.css'
import SparklesIcon from "@/components/SparklesIcon";
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lets Caption it',
  description: 'Generate Captions for your videos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-green-400 to-blue-400 min-h-screen text-black"}>
        <main className="p-4 max-w-2xl mx-auto">
          <header className="flex justify-between my-2 sm:my-8">
            <Link href="/" className="flex gap-1">
              <SparklesIcon />
              <span>Lets Caption</span>
            </Link>
            <nav className="flex items-center gap-2 sm:gap-6 text-black/80 text-sm sm:text-bas">
              <Link href="/">Home</Link>
              <Link href="/pricing">Pricing</Link>
              <a href="mailto:srivastavaaditya015@gmail.com">Contact</a>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
