import { useState } from "react";

export default function Count(){
    const [count, setCount] = useState(0);

    const handleAdd =()=> {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleMinus =()=> {
        const newCount = count - 1;
        setCount(newCount);
    }

    const resetCount =()=> {
        setCount(0);
    }

    return (
        <div className="card">
            <h2>Score: {count}</h2>

            <button onClick={handleAdd}>Add</button>

            <button onClick={handleMinus}>Minus</button>

            <button onClick={resetCount}>Reset</button>
        </div>
    )
}