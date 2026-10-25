import { NextResponse } from 'next/server'

let todos = [
  { id: 1, name: 'Get Groceries' },
  { id: 2, name: 'Do Homework' },
  { id: 3, name: 'Go to the gym' },
]

export async function GET() {
  return NextResponse.json({ todos })
}

export async function POST(request) {
  const data = await request.json()
  const name = typeof data.todoName === 'string' ? data.todoName.trim() : ''

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }

  const id = todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1
  todos.push({ id, name })

  return NextResponse.json({ todos })
}

export async function DELETE(request) {
  const data = await request.json()
  todos = todos.filter((todo) => todo.id !== data.id)

  return NextResponse.json({ todos })
}
