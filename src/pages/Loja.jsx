import Header from '../components/Header'
import BannerOfertas from '../components/BannerOfertas'
import JogoCard from '../components/JogoCard'
import { Jogos } from '../data/Jogos'
import InfoJogo from './InfoJogo'

function Loja() {
     const featuredGame = Jogos.find((game) => game.featured) || Jogos[0]
    const otherGames = Jogos.filter((game) => !game.featured)


    return (
        <div className="App min-vh-100 text-white">
      <Header />

      <main className="container py-5">
        <div className="mb-4">
          <h1 className="display-5 fw-bold fs-1">Destaque da loja</h1>
          <p className="text-secondary lh-lg">Descubra jogos populares, promoções e novidades selecionadas para você.</p>
        </div>

        <BannerOfertas game={featuredGame} />

        <section className="mt-5">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
            <h2 className="fs-3 mb-0">Outros jogos</h2>
            <span className="text-secondary">Escolha seu próximo título</span>
          </div>
          <JogoCard games={otherGames} />
        </section>
      </main>
    </div>
    )
}

export default Loja;