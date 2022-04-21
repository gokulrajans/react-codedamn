import React from "react";

let age = 0;

function increaseValue() {
    age++;
    console.log(age);
}
function content() {
    return <><p>Clik the below button to increase the age value in it</p>
    <button onClick={increaseValue}>Click Me</button>
    <h5>age: {age} </h5></>
}

export default content