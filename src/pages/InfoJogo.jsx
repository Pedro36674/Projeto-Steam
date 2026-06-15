import {useParams, useNavigate} from 'react-router-dom'
import { Jogos } from '../data/Jogos'
import Header from '../components/Header'

function InfoJogo() {
    const { id } = useParams()
    const navigate = useNavigate()
    const game = Jogos.find((jogo) => jogo.id === Number(id))
    
    if (!game) {
        return (
            <>
                <Header />
                <div className="container p-0">
                    <h2 className="text-white">Nenhum jogo encontrado.</h2>
                    <button className="btn btn-secondary mt-3" onClick={() => navigate('/loja')}>
                        Voltar para a loja
                    </button>
                </div>
            </>
        )
    }

    return (
    <div>
        <Header />
        <section className="info-hero" style={{ backgroundImage: `url(${game.bannerImage})` }}>
          <div className="info-hero-content container">
            <span className="game-tag">{game.category}</span>
            <h1>{game.name}</h1>
            <p>{game.description}</p>
            <button className="btn btn-steam me-3">R$ {game.price.toFixed(2).replace('.', ',')}</button>
            <button className="btn btn-secondary" onClick={() => navigate('/loja')}>
              Voltar para a loja
            </button>
          </div>
        </section>

        <main className="container py-5">
          <section className="info-details p-4 mb-4">
            <h2 className="fs-4 mb-3">Detalhes do jogo</h2>
            <p>{game.description}</p>
          </section>
        </main>
    </div>
    )
}

export default InfoJogo;