import ClientComponent from '@/components/ClientComponent'

function ServerPage() {
  console.log("Hi i've been rendered on the server")
  return (
    <div>
      <div>Server Page</div>
      <ClientComponent />
    </div>
  )
}

export default ServerPage
