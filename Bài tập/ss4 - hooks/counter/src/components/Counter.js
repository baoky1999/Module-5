import {Component, useState} from "react";

function Counter () {
    const [count,setCount] = useState(0);
    const [counter,setCounter] = useState(0);

    const handleCounter = () => {
        setCount (prevState => prevState + 1);
    };

    const handleCounter2 = () => {
        setCounter (prevState => prevState + 2);
    };

    return (
        <div>
            <div>
                <h1>Count : {count}</h1>
                <button onClick={handleCounter}>Add 1</button>
            </div>
            <div>
                <h1>Count : {counter}</h1>
                <button onClick={handleCounter2}>Add 2</button>
            </div>
        </div>
    );
}
export default Counter;