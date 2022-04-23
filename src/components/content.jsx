import React, { useState } from "react";

function Content() {

    const [fruits, setValue] = useState(["Apple", "Mango", "Pinapple", "Orange"]);
    const [todo, setTodo] = useState("");

    function addContent(event) {
        event.preventDefault();

        setValue(oldVal => {
            return [...oldVal, todo]
        });
        setTodo("");

    }

    function keydownfunction(e) {
        if (e.keyCode == 13) {
            addContent();
        }
    }
    return <><h1>Best Application to print Down...</h1>
        <form onSubmit={addContent}>
            <input onKeyDown={keydownfunction} type="text" value={todo} onChange={ev => {
                setTodo(ev.target.value);
            }}></input>
            <button type="Submit">Add the content</button>
        </form>
        <ul>
            {fruits.map((item) => { return <li>{item}</li> })}
        </ul>
    </>
}

export default Content