// components/TodoItem.js
import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = () => {
  return (
    <div className="tarea">
      <p>Aprender CSS</p>
      <div className="acciones">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-trash"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#B2324A"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* ... código del icono de basura */}
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-check"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#117A7A"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* ... código del icono de verificación */}
        </svg>
      </div>
    </div>
  );
};

export default TodoItem;
