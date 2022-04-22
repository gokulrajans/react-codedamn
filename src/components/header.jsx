import React, {useState, useEffect} from "react";

const apples =["as0","as1","as2","as3","as4","as5","as6","as7"];

function Header() {
    const [count, setValue] = useState(25);
    
    const [apple, currentValue] = useState(apples[0]);


    useEffect(() => {
        console.log("useEffect has been triggered..."+ count);
    },[count]);

    function increaseValue() {
        // function using in the state.
        setValue(function(){
            return 2000;
        });
    }
    function decreseValue() {
        setValue(count - 1);
    }

    // To change the random value....
    function changeValue() {
        const ranNum = apples[Math.floor(Math.random() * apples.length)]
        currentValue(ranNum);
    }
    return <><h1>useState hooks...</h1>
    <h3>Counter: {count}</h3>
    <h3>{apple}</h3>
    <button onClick={increaseValue}>IncreaseValue</button>
     <button onClick={decreseValue}>DecreseValue</button>
     <button onClick={changeValue}>Change Value</button></>
}

export default Header