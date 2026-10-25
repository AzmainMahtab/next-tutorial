'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function AddTodo() {
  const router = useRouter()
  const [todoName, setTodoName] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    if (!todoName.trim()) return

    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todoName }),
    })

    if (response.ok) {
      setTodoName('')
      router.refresh()
    } else {
      throw new Error('Something went wrong')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-3">
      <input
        value={todoName}
        onChange={(event) => setTodoName(event.target.value)}
        placeholder="Add a todo"
        className="w-full rounded border border-gray-300 px-3 py-2"
      />
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo
