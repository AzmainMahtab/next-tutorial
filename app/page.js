import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="font-luckiestGuy text-5xl text-gray-900">
        Todo Creator App
      </h1>
      <p className="mt-4 text-gray-600">
        Create and organize your todo list easily.
      </p>
      <div className="mt-8">
        <Link
          href="/todos"
          className="rounded bg-blue-500 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}
