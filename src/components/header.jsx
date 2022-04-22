import React, {useState} from "react";


function Header() {
    const [count, setValue] = useState(25);

    function increaseValue() {
        setValue(35);
    }
    function decreseValue() {
        setValue(-90);
    }
    return <><h1>useState hooks...</h1>
    <h3>Counter: {count}</h3>
    <button onClick={increaseValue}>IncreaseValue</button>
     <button onClick={decreseValue}>DecreseValue</button></>
}

export default Header