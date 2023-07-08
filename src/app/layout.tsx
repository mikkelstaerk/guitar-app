import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            <li>
                    <Link href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Chords</Link>
                </li>
                <li>
                    <Link href="/progressions" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Progressions</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>


   {children}
   
   </body>
    </html>
  )
}