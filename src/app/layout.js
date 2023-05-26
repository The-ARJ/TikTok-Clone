import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TikTok',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="./assets/fav.png" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
