import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const TodoAdc = ({ addTodo }) => {

    // Estados locais para controlar os valores dos inputs
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    

    //Manipulador de evento para a adição de novos itens
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !category) return;
        addTodo(title, category, description);
        setTitle("");
        setCategory("");
        setDescription("");
    }

    


    //Renderização do criar tarefa
    return (
        <div className="todo-form">
            
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o título"
                    value={title} onChange={(e) => setTitle(e.target.value)} />


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

                <button type="button" className="emoji-button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
                
                </div>
                {showEmojiPicker && (
                    <EmojiPicker
                    emojiStyle='native'
                    onEmojiClick={(e) => {
                        setDescription(prevDescription => prevDescription + (e.emoji));
                    }} />
                )}

                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoAdc