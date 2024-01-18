// components/TodoList.js
import React from 'react';
import '../styles/TodoList.css';

const TodoList = ({ metas, marcarComoCompletada, eliminarMeta }) => {
  return (
    <div className="tareas">
      {metas.map((meta, index) => (
        <div className="tarea" key={index}>
          <p>{meta}</p>
          <div className="acciones">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-check"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#117A7A"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => marcarComoCompletada(index)}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
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
              onClick={() => eliminarMeta(index)}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;



