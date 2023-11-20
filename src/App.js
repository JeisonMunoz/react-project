import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },
];

function App() {
  const[searchValue, setSearchValue]=React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);
  
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      // se convierte la validacion a minusculas para encontrar cualquier busqueda con letras mayusculas
      // Se converte el searchvalue a minusculas tambien ya que es el valor buscado por el usuario
      return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
    }
  )

  console.log('los usuarios buscan todos de ' + searchValue)


  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {/* en vez de usar el defaultTodos que se venia usando, se va a usar el array derivado searchedTodos, que es un filtro del estado searchValues */}
      {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}



export default App;
