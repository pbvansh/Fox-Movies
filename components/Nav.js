import Link from "next/link"

const Nav = () => {
  return (
    <nav className="bg-gray-700">
        <div className="font-bold text-neutral-100 p-3 max-w-7xl">
            <Link href={'/'}>
                <a className="text-base md:text-2xl">
                    <span className="text-blue-500">Fox</span><span>-</span><span className="text-red-500">Movies</span>
                </a>
            </Link>
        </div>
    </nav>
  )
}

export default Nav