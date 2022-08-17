import React, { useState } from "react";

export function ConditionalRendering() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    let countMessage = <></>;
    if (count > 10) {
        countMessage = <p>Wow, that's over ten!</p>;
    }

    function renderMessage() {
        if (count <= 10) return;
        return <p>Wow, that's over ten!</p>;
    }

    return (
        <div>
            <h3>Conditional rendering</h3>
            <p>Count: {count}</p>

            {countMessage}

            {count > 10 && <p>Wow, that's over ten!</p>}

            {count > 10 ? <p>Wow, that's over ten!</p> : <></>}

            {renderMessage()}
            
            <button onClick={increment}>Increment</button>
        </div>
    )
}
