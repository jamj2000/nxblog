import Link from "next/link"

function notfound() {
  return (
    <div>
        <h1>Contenido no encontrado</h1>
        <p>Pulsa <Link href="/">aquí</Link> para volver al inicio.</p>
    </div>
  )
}

export default notfound