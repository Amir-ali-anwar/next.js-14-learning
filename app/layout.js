import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from './providers';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learning Next.js',
  description: 'Building the awesome Apps',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        <main className='px-8 py-20 max-w-6xl mx-auto'>
         <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
