import React, { useState } from "react";



function Content() {

    const [fruits, setValue] = useState(["Apple", "Mango", "Pinapple", "Orange"]);
    const [todo, setTodo] = useState("");

    function addContent() {
        setValue(oldVal => {
            return [...oldVal, todo]
        })
    }
    return <><h1>Best Application to print Down...</h1>
        <input type="text" value={todo} onChange={ev => {
            setTodo(ev.target.value);
        }}></input>
        <button onClick={addContent}>Add the content</button>
        <ul>
            {fruits.map((item) => { return <li>{item}</li> })}
        </ul>
    </>
}

export default Content