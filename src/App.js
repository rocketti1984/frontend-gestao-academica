import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Notas from './components/Notas';

function App() {
  const [view, setView] = React.useState("login");

  return (
    <div>
      {view === "login" && <Login onLogin={() => setView("dashboard")} />}
      {view === "dashboard" && (
        <>
          <Dashboard />
          <button onClick={() => setView("notas")}>Ver Notas</button>
        </>
      )}
      {view === "notas" && <Notas />}
    </div>
  );
}

export default App;
