import Link from 'next/link'
import AddTodo from '@/components/AddTodo'
import DeleteTodo from '@/components/DeleteTodo'

async function TodosPage() {
  const response = await fetch('http://localhost:3000/api/todos', {
    cache: 'no-store',
  })

  const data = await response.json()

  return (
    <section className="mt-12 flex w-full justify-center px-4">
      <div>
        <AddTodo />
        <table className="min-w-max overflow-hidden rounded-lg border border-gray-200 bg-white">
          <thead>
            <tr className="bg-gray-800 text-sm uppercase leading-normal text-white">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light text-gray-600">
            {data.todos.map((todo) => (
              <tr
                key={todo.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-3">
                  <Link href={`/todos/${todo.id}`}>{todo.id}</Link>
                </td>
                <td className="px-6 py-3">{todo.name}</td>
                <td className="px-6 py-3">
                  <DeleteTodo id={todo.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {data.todos.length === 0 && (
          <p className="mt-4 text-center text-gray-500">No todos yet</p>
        )}
      </div>
    </section>
  )
}

export default TodosPage
