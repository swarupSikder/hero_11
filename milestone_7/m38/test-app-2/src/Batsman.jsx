import { useState } from "react"

export default function Batsman(){
    let [runs, setRuns] = useState(0);

    const handleRuns = (x) => {
        const newRuns = runs + x;
        setRuns(newRuns);
    }

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={() => handleRuns(1)}>Singles</button>
            <button onClick={() => handleRuns(4)}>Four</button>
            <button onClick={() => handleRuns(6)}>Six</button>
        </div>
    )
}