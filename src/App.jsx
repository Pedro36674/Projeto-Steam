
import Header from './components/Header'

function App() {
  return (
    <div className="App min-vh-100 bg-steam-body-dark text-white">
      <Header />

      <main className="container py-5">
        <h1 className="display-5 fw-bold">OFERTAS</h1>
        <p className="lead">Bem-vindo à loja. Role para baixo e descubra os melhores jogos.</p>
      </main>
    </div>
  )
}

export default App
