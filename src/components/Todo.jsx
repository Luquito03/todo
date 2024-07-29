import { useState, useEffect  } from 'react';

const Todo = ({ todo, removeTodo, completeTodo, editTodo }) => {


    const [buttonText, setButtonText] = useState(todo.isCompleted ? 'Desmarcar' : 'Completar');

    // Função para alternar o texto do botão e marcar/desmarcar a tarefa
    const handleClick = () => {
        completeTodo(todo.id);
        setButtonText(todo.isCompleted ? 'Completar' : 'Desmarcar');
    };

    // Atualizar o estado do botão quando a tarefa for concluída
    useEffect(() => {
        setButtonText(todo.isCompleted ? 'Desmarcar' : 'Completar');
    }, [todo.isCompleted]);


    


    //Renderização dos cards das tarefas
    return (

        //Alterar estilo para mostrar tarefas concluídas
        <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "", backgroundColor: todo.isCompleted ? "#d3d3d3" : "" }}>

            <div className="content">
                <p>{todo.title}</p>
                <p className="category">({todo.category})</p>
                <p className="description">{todo.description}</p>
            </div>

            <div>
                <button className="completar" onClick={() => { completeTodo(todo.id); handleClick }} style={{ backgroundColor: todo.isCompleted ? "#95b9bd" : "" }}>{buttonText}</button>
                <button className="editar" onClick={() => editTodo(todo.id)} >Editar</button>
                <button className="remover" onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
    )
}

export default Todo