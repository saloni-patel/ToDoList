import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Form() {
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    console.log(todo)
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([...todo, text])
        setText("")
    }
    const handleDelete = (delIndex) => {
        const newTodo = todo.filter((item, index) => index !== delIndex)
        console.log(newTodo)
        setTodo(newTodo);
    }
    const handleUpdate = (upIndex) => {
        const newValue = prompt("Enter Your Task", todo[upIndex]);
        if (!newValue) {
            return;
        } else {
            const newTodos = [...todo];
            //newTodos[id].isDone = false;
            newTodos[upIndex] = newValue;
            setTodo(newTodos);
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={() => handleSubmit}>
                    <label><b>INPUT FIELD: </b></label>
                    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div style={{ display: "grid" }}>
                {
                    todo.map((todo, index) => {
                        return (<div key={index} style={{ border: "2px solid black" }}>
                            <h1>{todo}</h1>
                            <button onClick={() => handleDelete(index)}>DELETE</button>&nbsp;
                            <button onClick={() => handleUpdate(index)}>UPDATE</button>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
