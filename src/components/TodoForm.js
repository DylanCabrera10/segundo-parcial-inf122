// components/TodoForm.js
// components/TodoForm.js
import React, { useState } from 'react';
import '../styles/TodoForm.css';

const TodoForm = ({ agregarMeta }) => {
  const [nuevaMeta, setNuevaMeta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaMeta.trim() !== '') {
      agregarMeta(nuevaMeta);
      setNuevaMeta('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="meta"
        type="text"
        id="meta"
        name="meta"
        placeholder="Nueva Meta..."
        value={nuevaMeta}
        onChange={(e) => setNuevaMeta(e.target.value)}
      />
      <input className="agregar" type="submit" value="Agregar" />
    </form>
  );
};

export default TodoForm;
