import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bem-vindo ao sistema!</p>
      <Link to="/notas">Ir para Notas</Link>
    </div>
  );
}

export default Dashboard;
