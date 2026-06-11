
function BannerOfertas({ game }) {
  if (!game) {
    return null
  }

  return (
    <div className="card mb-5" style={{ backgroundColor: '#1b2838' }}>
      <img className="card-img-top" src={game.coverImage} alt={game.name} />
      <div className="card-body text-white d-flex flex-column justify-content-end">
        <h1 className="card-title">{game.name}</h1>
        <p className="card-text">{game.description}</p>
        <a href="#" className="btn btn-comprar">
          Comprar por R$ {game.price.toFixed(2).replace('.', ',')}
        </a>
      </div>
    </div>
  )
}

export default BannerOfertas;