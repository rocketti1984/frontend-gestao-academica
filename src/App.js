import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Notas from './components/Notas';

function App() {
  const [view, setView] = useState("login");

  const handleLogin = () => setView("dashboard");
  const handleVerNotas = () => setView("notas");
  const handleVoltar = () => setView("dashboard");

  return (
    <div style={{ padding: "20px" }}>
      {view === "login" && <Login onLogin={handleLogin} />}
      {view === "dashboard" && (
        <div>
          <Dashboard />
          <button onClick={handleVerNotas}>Ver Notas</button>
          <button onClick={() => setView("login")}>Sair</button>
        </div>
      )}
      {view === "notas" && (
        <div>
          <Notas />
          <button onClick={handleVoltar}>Voltar ao Dashboard</button>
        </div>
      )}
    </div>
  );
}

export default App;
