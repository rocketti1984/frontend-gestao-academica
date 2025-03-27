import React, { useState } from 'react';

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    const res = await fetch('https://backend-gestao-academica.onrender.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, senha }),
    });
    if (res.ok) onLogin();
    else alert("Usuário ou senha incorretos.");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Usuário" onChange={(e) => setUsuario(e.target.value)} /><br />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} /><br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
