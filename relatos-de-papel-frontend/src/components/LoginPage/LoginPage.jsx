"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./LoginPage.css"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setError("") // Limpiar cualquier error previo

    if (email === "user" && password === "user") {
      console.log("Login realizado como usuario")
      navigate("/main")
    } else if (email === "admin" && password === "admin") {
      console.log("Login realizado como administrador")
      navigate("/admin")
    } else {
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.")
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar sesión</h2>
        <div className="logo">
          <a>📚 Mundo Literario</a>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-btn">
            Iniciar sesión
          </button>
        </form>
        <p className="redirect-text">
          ¿No tienes cuenta? <a href="/register">Regístrate</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage