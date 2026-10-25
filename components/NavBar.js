import Link from 'next/link'

function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 px-6 py-4">
      <div className="text-xl font-semibold text-white">
        <Link href="/">Todo Creator</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/todos" className="text-white hover:text-gray-300">
            Todos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
