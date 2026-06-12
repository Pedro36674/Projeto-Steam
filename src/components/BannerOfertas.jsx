import { useNavigate } from 'react-router-dom'

function BannerOfertas({ game }) {
  const navigate = useNavigate()

  if (!game) {
    return null
  }

  return (
    <div className="card mb-5" style={{ backgroundColor: '#1b2838' }}>
      <img className="card-img-top" src={game.coverImage} alt={game.name} />
      <div className="card-body text-white d-flex flex-column justify-content-end">
        <h1 className="card-title">{game.name}</h1>
        <p className="card-text">{game.description}</p>
        <button
          type="button"
          className="btn btn-comprar mt-3"
          onClick={() => navigate(`/game/${game.id}`)}>
          Comprar por R$ {game.price.toFixed(2).replace('.', ',')}
        </button>
      </div>
    </div>
  )
}

export default BannerOfertas;