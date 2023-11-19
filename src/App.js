import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';



function App() {
  const[searchValue, setSearchValue]=React.useState('');
  
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
