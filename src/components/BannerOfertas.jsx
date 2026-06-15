import { useNavigate } from 'react-router-dom'

function BannerOfertas({ game }) {
  const navigate = useNavigate()

  if (!game) {
    return null
  }

  return (
    <article className="card game-card mb-5">
      <img className="card-img-top" src={game.bannerImage} alt={game.name} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <span className="game-tag">{game.category}</span>
          <h2 className="card-title mt-2">{game.name}</h2>
          <p className="card-text">{game.description}</p>
        </div>
        <button
          type="button"
          className="btn btn-steam mt-3"
          onClick={() => navigate(`/game/${game.id}`)}>
          Comprar por R$ {game.price.toFixed(2).replace('.', ',')}
        </button>
      </div>
    </article>
  )
}

export default BannerOfertas;