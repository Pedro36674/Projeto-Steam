import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Loja from './pages/Loja'
import InfoJogo from './pages/InfoJogo'

function App() {
  return (
    <BrowserRouter>
      <div className="App min-vh-100 text-white">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/game/:id" element={<InfoJogo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
