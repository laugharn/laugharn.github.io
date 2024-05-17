import Link from '~/components/link'
import pkg from '../package.json'

async function Page() {
  return (
    <div className="grid grid-cols-1 gap-2 *:col-span-full lg:gap-4">
      <p>
        Hi, I’m Dan. Currently I'm the lead engineer at <Link href="https://madeincookware.com">🍳Made In</Link>, and
        before that I was at <Link href="https://www.msrenewal.com">🏡Amherst</Link> and{' '}
        <Link href="https://www.aceable.com">🤖Aceable</Link>. This website is kind of a placeholder while I figure out
        what you are supposed to do with a personal website these days.
      </p>

      <p>
        It's built primarily using Next.js {pkg.dependencies.next} and Tailwind {pkg.dependencies.tailwindcss} and
        exported to GitHub Pages. You can see how it's built at the{' '}
        <Link href="https://github.com/laugharn/laugharn.github.io">repo</Link>.
      </p>
    </div>
  )
}

export default Page
