import React, { useEffect, useState } from 'react';

function Notas() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    fetch("https://backend-gestao-academica.onrender.com/api/notas")
      .then((res) => res.json())
      .then((data) => setNotas(data));
  }, []);

  return (
    <div>
      <h2>Notas dos Alunos</h2>
      <ul>
        {notas.map((aluno, index) => (
          <li key={index}>{aluno.nome}: {aluno.nota}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notas;
