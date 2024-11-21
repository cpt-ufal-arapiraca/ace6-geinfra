import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-heading my-8">
        Home GEINFRA
      </h1>

      <nav className="mt-10">
        <Link to="/newSolicitation" className="underline">Nova solicitação</Link>
      </nav>
      <nav className="mt-10">
        <Link to="/solicitations" className="underline">Visualizar solicitações</Link>
      </nav>
    </div>
  )
}

export default Home
