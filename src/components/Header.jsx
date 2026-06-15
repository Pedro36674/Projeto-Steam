function Header() {
  return (
    <header className="site-header">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">
        <a className="brand" href="/loja">
          <div className="brand-mark">S</div>
          <div>
            <span className="brand-title">Steam</span>
            <span className="brand-subtitle">Loja de jogos</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="/loja">Loja</a>
          <a href="#">Biblioteca</a>
          <a href="#">Comunidade</a>
          <a href="#">Ajuda</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;