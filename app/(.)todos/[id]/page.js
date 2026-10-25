'use client'

import { useRouter } from 'next/navigation'

function Modal({ params }) {
  const router = useRouter()

  function handleContinue() {
    window.location.reload()
  }

  function handleClose() {
    router.back()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="rounded-lg bg-white text-center shadow-xl">
        <div className="px-4 py-6">
          <h3 className="text-lg font-medium text-gray-900">Intercept Modal</h3>
          <p className="mt-2 text-sm text-gray-500">
            Intercepting todo ID : {params.id}
          </p>
        </div>
        <div className="flex justify-center gap-5 p-5">
          <button
            className="rounded-lg bg-blue-500 px-2 text-white"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="rounded-lg bg-blue-500 px-2 text-white"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
