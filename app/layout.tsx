import '~/styles/app.css'
import type { Metadata, Viewport } from 'next'
import Link from '~/components/link'
import type { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="grid grid-cols-1 gap-3 p-3 text-xl/6 font-light antialiased *:col-span-full lg:gap-6 lg:p-6 lg:text-5xl">
        <div>
          <Link href="/">Laugharn Development</Link>
        </div>
        {children}
        <div className="text-[gray]">&copy;{new Date().getFullYear()}, all rights reserved.</div>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Laugharn Development',
}

export const viewport: Viewport = {
  maximumScale: 1,
  initialScale: 1,
  width: 'device-width',
}

export default Layout
