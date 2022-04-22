import React, {useState} from "react";


function Header() {
    const [count, setValue] = useState(25);


    function increaseValue() {
        // function using in the state.
        setValue(function(){
            return 2000;
        });
    }
    function decreseValue() {
        setValue(count - 1);
    }
    return <><h1>useState hooks...</h1>
    <h3>Counter: {count}</h3>
    <button onClick={increaseValue}>IncreaseValue</button>
     <button onClick={decreseValue}>DecreseValue</button></>
}

export default Header