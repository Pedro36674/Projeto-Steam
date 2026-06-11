import Header from './components/Header'
import BannerOfertas from './components/BannerOfertas'
import JogoCard from './components/JogoCard'
import { Jogos } from './data/Jogos'

function App() {
  const featuredGame = Jogos.find((game) => game.featured) || Jogos[0]
  const otherGames = Jogos.filter((game) => !game.featured)

  return (
    <div className="App min-vh-100 bg-steam-body-dark text-white">
      <Header />

      <main className="container p-0">
        <h1 className="display-5 fw-bold fs-1 mt-4">OFERTAS EM DESTAQUE</h1>
        <BannerOfertas game={featuredGame} />

        <section className="mt-5">
          <h2 className="fs-3 mb-3">Outros jogos</h2>
          <JogoCard games={otherGames} />
        </section>
      </main>
    </div>
  )
}

export default App
