import NextLink from 'next/link'
import type { ReactNode } from 'react'

function Link({ children, href }: { children: ReactNode; href: string }) {
  return (
    <NextLink
      className="text-[blue] transition-colors duration-100 hover:text-[purple]"
      href={href}
      prefetch={false}
      target={href.startsWith('http') ? '_blank' : '_self'}
    >
      {children}
    </NextLink>
  )
}

export default Link
