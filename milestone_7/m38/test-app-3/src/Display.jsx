import { useState } from "react";

export default function Display() {
    const [vis, setVis] = useState(['Show']);

    const setDisplay = () => {
        const text = document.getElementById('text');

        if (vis == 'Show') {
            text.classList.remove('hideDisplay');
            text.classList.add('showDisplay');

            const newState = ['Hide'];
            setVis(newState);
        }
        else {
            text.classList.remove('showDisplay');
            text.classList.add('hideDisplay');

            const newState = ['Show'];
            setVis(newState);
        }
    }


    return (
        <div className="card">
            <h3>Display</h3>

            <p id="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, et, atque, harum magnam pariatur molestias eos adipisci dolore temporibus deleniti alias eum. Nam repellat tempora labore ex, aut ut. Nulla tempora ex, sit blanditiis iste nobis itaque atque aperiam autem maxime nostrum quis tempore provident velit enim quaerat laborum ipsam.</p>

            <button onClick={setDisplay}>{vis}</button>
        </div>
    )
}