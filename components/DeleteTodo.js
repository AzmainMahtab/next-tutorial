'use client'

import { useRouter } from 'next/navigation'

function DeleteTodo({ id }) {
  const router = useRouter()

  async function handleDelete() {
    const response = await fetch('/api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })

    if (response.ok) {
      router.refresh()
    } else {
      throw new Error('Something went wrong')
    }
  }

  return (
    <button onClick={handleDelete} className="text-red-600 hover:underline">
      Delete
    </button>
  )
}

export default DeleteTodo
