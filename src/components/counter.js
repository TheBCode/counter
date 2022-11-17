import React, {useState} from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    function addCount(){
        setCount(count + 1 );
        console.log(count);
    }
    function minusCount(){
        setCount(count - 1 );
    }

    function timestwoCount(){
        setCount(count * 2 );
    }

    function resetCount(){
        setCount(0 );
    }
    return (
        <div>
               <p className="counter">{count}</p>
                <div className="col">
                    <button className="btn" onClick={addCount}>+</button>
                    <button onClick={minusCount}>-</button>
                    <button onClick={timestwoCount}>x2</button>
                    <button onClick={resetCount}>reset</button>
                </div>
        </div>
    );
};

export default Counter;