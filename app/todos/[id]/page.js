export default function TodoPage({ params }) {
  return (
    <section className="mt-24 flex justify-center">
      <h1 className="font-luckiestGuy text-4xl">Todo: {params.id}</h1>
    </section>
  )
}
