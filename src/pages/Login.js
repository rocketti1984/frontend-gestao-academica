import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuário" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
