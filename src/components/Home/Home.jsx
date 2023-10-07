import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="home-container">

    <main className="home">

        <h1 className="home-h1">Registro de tareas</h1>

        <div className="home-links">
            <Link className="home-links-link" to="./create">Crear registro</Link>
            <Link className="home-links-link" to="./register">Ver registros</Link>
        </div>
    </main>

    </div>
  )
}

export default Home