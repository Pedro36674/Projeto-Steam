import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "../index.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        if (email === "user@steam.com" && password === "password123") {
            navigate("/loja");
        } else {
            alert("Email ou senha incorretos. Tente novamente.");
        }
    }

    return (
        <div className="login-container d-flex flex-column align-items-center justify-content-center min-vh-100 text-white">
            <article className="login-panel">
                <h1>Bem-vindo à Steam</h1>
                <p>Entre na loja e descubra os melhores jogos com ofertas exclusivas.</p>
                <form onSubmit={handleLogin} className="login-form d-flex flex-column">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control mb-3"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control mb-3"
                        required
                    />
                    <button type="submit" className="btn btn-steam">
                        Entrar
                    </button>
                </form>
            </article>
        </div>
    );
}

export default Login;