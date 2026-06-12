import { useNavigate } from 'react-router-dom'

function JogoCard({ games }) {
  const navigate = useNavigate()

  if (!games || games.length === 0) {
    return <p className="text-white">Nenhum jogo encontrado.</p>
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
      {games.map((game) => (
        <div key={game.id} className="col">
          <div className="card h-100" style={{ backgroundColor: '#1b2838' }}>
            <img className="card-img-top" src={game.coverImage} alt={game.name} />
            <div className="card-body text-white d-flex flex-column justify-content-between">
              <div>
                <h2 className="card-title fs-5">{game.name}</h2>
                <p className="card-text">{game.description}</p>
              </div>
              <button
                type="button"
                className="btn btn-comprar mt-3"
                onClick={() => navigate(`/game/${game.id}`)}
              >
                R$ {game.price.toFixed(2).replace('.', ',')}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JogoCard;