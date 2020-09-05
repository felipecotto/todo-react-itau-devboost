import React from 'react';
import { Form } from 'react-bootstrap';

const SelectUser = (props) => {
  const { users } = props;
//   if (!users || users.length === 0) return <p>não há tarefas disponiveis nesta pagina</p>;
  return (
    <Form>
    <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label>Selecione o Usuário para visualizar as tarefas</Form.Label>
      <Form.Control as="select" custom>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
  </Form>
  );
};
export default SelectUser;