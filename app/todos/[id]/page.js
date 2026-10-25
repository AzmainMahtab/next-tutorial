import { notFound } from 'next/navigation'

async function page({ params }) {
  const response = await fetch('http://localhost:3000/api/todos', {
    cache: 'no-store',
  })

  const data = await response.json()
  const todo = data.todos.find((todo) => todo.id === parseInt(params.id))

  if (!todo) notFound()

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="mb-4 text-3xl font-bold text-blue-900">
        Note ID: {params.id}
      </div>
      <div className="mb-4 text-xl font-medium text-gray-800">
        Note Name: {todo.name}
      </div>
    </div>
  )
}

export default page
