function Header() {
  return (
    <header className="bg-steam-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="d-flex align-items-center gap-2">
        <i className="bi bi-steam"></i><span className="h4 mb-0">Steam</span>
        </div>
        <nav className="d-flex gap-3">
          <a className="text-white text-decoration-none" href="#loja">Loja</a>
          <a className="text-white text-decoration-none" href="#biblioteca">Biblioteca</a>
          <a className="text-white text-decoration-none" href="#comunidade">Comunidade</a>
          <a className="text-white text-decoration-none" href="#ajuda">Ajuda</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;