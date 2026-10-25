'use client'

function error({ reset }) {
  return (
    <div className="mt-24 text-center">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className="mt-2 text-blue-600 underline">
        Try again
      </button>
    </div>
  )
}

export default error
