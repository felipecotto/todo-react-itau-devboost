import React from 'react';
import * as S from "./styled"

const List = (props) => {
  const { todos } = props;
  if (!todos || todos.length === 0) return <p>não há tarefas disponiveis nesta pagina</p>;
  return (
    <S.ListTasks>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            
            <h3>Usuário: {todo.userId} <br/> Tafefa: {todo.title}</h3>
            <input type="checkbox"/>
          </li>
        );
      })}
    </S.ListTasks>
  );
};
export default List;