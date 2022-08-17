import React, { useEffect, useState } from "react";

export function ChangeDetection(props) {

    const [timesClicked, setTimesClicked] = useState(0);

    useEffect(() => {
        console.log("Times clicked changed! New value: ", timesClicked);
    }, [timesClicked])

    function increment() {
        setTimesClicked(timesClicked + 1)
    }
    
    return ( 
        <div>
            <h3>Change detection</h3>
            <button onClick={increment}>Incerement</button>
            <p>Clicked {timesClicked} times</p>
        </div>
    );
}
