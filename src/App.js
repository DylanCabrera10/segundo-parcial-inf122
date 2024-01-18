// src/App.js
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [metas, setMetas] = useState(['Aprender CSS']);

  const agregarMeta = (nuevaMeta) => {
    setMetas([...metas, nuevaMeta]);
  };

  const marcarComoCompletada = (index) => {
    const nuevasMetas = [...metas];
    nuevasMetas[index] = `✔️ ${nuevasMetas[index]}`;
    setMetas(nuevasMetas);
  };

  const eliminarMeta = (index) => {
    const nuevasMetas = [...metas];
    nuevasMetas.splice(index, 1);
    setMetas(nuevasMetas);
  };

  const metasCompletadas = metas.filter((meta) => meta.startsWith('✔️')).length;

  return (
    <div className="contenedor">
      <h1 className="titulo">Mis Metas</h1>
      <TodoForm agregarMeta={agregarMeta} />
      <div className="opciones">
        <p className="completada">
          Completadas: <span>{metasCompletadas}</span>
        </p>
        <p className="pendiente">
          Pendientes: <span>{metas.length - metasCompletadas}</span>
        </p>
      </div>
      <TodoList metas={metas} marcarComoCompletada={marcarComoCompletada} eliminarMeta={eliminarMeta} />
    </div>
  );
};

export default App;
