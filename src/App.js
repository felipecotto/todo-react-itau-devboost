import React, { useEffect, useState } from 'react';
import GlobalStyles from "./styles/global"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Form } from 'react-bootstrap';
import Layout from './layout'; 

import List from './components/List'; 
import withListLoading from './components/WithListLoading';
import SelectUser from './components/SelectUser'; 

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    todos: null,
    users: null,
  });

  useEffect(() => {
    const Api = `https://jsonplaceholder.typicode.com/users`; 
    fetch(Api)
      .then((res) => res.json())
      .then((users) => {
        setAppState({ users: users });
        console.log(users)
      }); 
      setAppState({ loading: true });
    const apiUrl = `https://jsonplaceholder.typicode.com/user/4/todos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((todos) => {
        setAppState({ loading: false, todos: todos });
      });
  }, [setAppState]);
  return (
    <>
      <GlobalStyles/>
      <Container>
      
        <Layout>

        <SelectUser users={appState.users} />
        <ListLoading isLoading={appState.loading} todos={appState.todos} />
      
      </Layout>
      </Container>
    </>
  );
}
export default App;
