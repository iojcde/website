import Link from "next/link"

const Nav = ()=>(
    <nav className="flex max-w-3xl mx-auto gap-8 py-4">
        <Link href="/">
            home
        </Link>
        <Link href='/projects'>
        projects
        </Link>
        <Link href='/blog'>blog</Link>
    </nav>
)

export default Nav