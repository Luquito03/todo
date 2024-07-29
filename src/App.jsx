import { useState } from 'react';
import Todo from "./components/Todo";
import TodoAdc from './components/TodoAdc';
import Pesquisa from './components/Pesquisa';
import Filter from './components/Filter';
import TodoEdit from './components/TodoEdit';
import "./App.css";



function App() {

  //Primeiro elemento de exemplo
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Este é um título de exemplo",
      category: "Trabalho",
      description: "Descrição de exemplo",
      isCompleted: false,
      isEditing: false,
    },


  ]);


  const [pesquisa, setPesquisa] = useState("")

  const [filter, setFilter] = useState("Todas")
  const [sort, setSort] = useState("")

  // Estado para controlar se estamos no modo de adicionar ou editar
  const [editTodoId, setEditTodoId] = useState(null);


  //Adicionar novos itens
  const addTodo = (title, category, description) => {
    const newTodo = [
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        description,
        isCompleted: false,
        isEditing: false,
      },
      ...todo,
    ];

    setTodo(newTodo);
    setEditTodoId(null); // Sair do modo de edição
  }

  //Editar itens
  const updateTodo = (id, title, category, description) => {
    const updatedTodos = todo.map((t) =>
      t.id === id ? { ...t, title, category, description } : t
    );
    setTodo(updatedTodos);
    setEditTodoId(null); // Sair do modo de edição

    window.scrollTo({
      top: 0,
    behavior: 'smooth'
    });


  };
  //Mudar item para editavel
  const editTodo = (id) => {
    setEditTodoId(id);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  };


  //Remover itens
  const removeTodo = (id) => {
    const newTodo = [...todo];
    const filteredTodo = newTodo.filter(
      todo => todo.id !== id ? todo : null
    );
    setTodo(filteredTodo);
  };

  //Mudar item para completo
  const completeTodo = (id) => {
    const newTodo = [...todo];
    newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodo(newTodo);

  }




  //Renderização
  return <div className="app">
    <h1>Lista de tarefas</h1>


    <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

    <div className="todo-list">
      <h2>Minhas Tarefas:</h2>
      {todo
        .filter((todo) => filter === "Todas" ? true : filter === "Completas" ? todo.isCompleted : !todo.isCompleted)

        .filter((todo) => todo.title.toLowerCase().includes(pesquisa.toLowerCase()))

        .sort((a, b) => sort === "AZ" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))

        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            editTodo={editTodo} />
        ))}
    </div>

    {/*Alternar rendezição entre Adicionar item e Editar item*/}
    <div className="alternancia">

      {editTodoId !== null ? (
        <TodoEdit
          key={editTodoId}
          todo={todo.find((t) => t.id === editTodoId)}
          updateTodo={updateTodo}
        />
      ) : (
        <TodoAdc addTodo={addTodo} />
      )}

    </div>

  </div>;

}

export default App
