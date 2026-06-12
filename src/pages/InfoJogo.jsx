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
        <section className="info-jogo p-0" style={{ backgroundColor: '#1b2838' }}>
            <h1 className="text-white">{game.name}</h1>
            <img src={game.bannerImage} alt={game.name} className="img-fluid mb-3" />
            <p className="text-white">{game.description}</p>
            <button className="btn btn-comprar">R$ {game.price.toFixed(2)}</button>
            <div className="card-body text-white d-flex flex-column justify-content-end">
            </div>
        </section>
    </div>
    )
}

export default InfoJogo;