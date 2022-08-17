import React from "react";

export function Expressions() {

    function handleInput(ev) {
        console.log("Input changed: ", ev);
        console.log("Checked: ", ev.target.checked);
    }

    return (
        <div>
            <h3>Expressions</h3> 

            <p><b>Regular Content based expressions</b></p>
            <p>2 + 2 is {2 +2}</p>

            <p><b>Attribute expressions</b></p>
            <input placeholder={new Date().toString()} />

            <p><b>Boolean expressions</b></p>
            <input type="checkbox" checked={Math.random() > 0.5} />

            <p><b>Boolean expressions (The correct way)</b></p>
            <input type="checkbox" defaultChecked={Math.random() > 0.5} />

            <p><b>Event expressions</b></p>
            <input type="checkbox" onInput={handleInput} />
        </div>
    )
}
