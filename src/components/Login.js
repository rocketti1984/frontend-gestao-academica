function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    const res = await fetch('https://SEU_BACKEND.onrender.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, senha }),
    });

    if (res.ok) {
      onLogin(); // <- redireciona para dashboard
    } else {
      alert("Usuário ou senha inválidos.");
    }
  };
