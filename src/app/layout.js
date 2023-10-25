import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Jose's Home",
  description: 'SSG next app example',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/about"}>About</Link>
        </nav>
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
