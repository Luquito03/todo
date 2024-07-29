import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';


const TodoEdit = ({ updateTodo, todo }) => {

    // Estados locais para controlar os valores dos inputs
    const [title, setTitle] = useState(todo.title)
    const [category, setCategory] = useState(todo.category)
    const [description, setDescription] = useState(todo.description)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)

    //Manipulador de evento para a edição de novos itens
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !category) return;
        updateTodo(todo.id, title, category, description);
        setTitle("");
        setCategory("");
        setDescription("");
    };


    //Renderização do Editar tarefa
    return (
        <div className="todo-form">
            <h2>Editar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />


                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                </select>

                <div className="input-with-emoji">
                <input
                    type="text"
                    value={description}
                    placeholder='Digite uma descrição (opcional)'
                    onChange={(e) => setDescription(e.target.value)} />

                <button type="button" className="emoji-button" onClick={() => {setShowEmojiPicker(!showEmojiPicker); }}>😊</button>
                </div>
                
                {showEmojiPicker && (
                    <EmojiPicker
                        emojiStyle='native'
                        onEmojiClick={(e) => {
                            setDescription(prevDescription => prevDescription + (e.emoji));
                        }} />
                )}


                <button type="submit">Atualizar tarefa</button>
            </form>
        </div>
    )
}


export default TodoEdit