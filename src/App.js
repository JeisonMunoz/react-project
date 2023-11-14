import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


import './App.css';

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>

      <TodoList>
        <TodoItem text= 'cortar cebolla' completed= {true}/>
        <TodoItem text= 'pelar papas' completed= {false}/>
        <TodoItem text= 'Calentar Agua' completed= {false}/>
        <TodoItem text= 'Comprar insumos' completed= {false}/>
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}



export default App;
