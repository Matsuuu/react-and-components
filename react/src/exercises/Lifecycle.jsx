import React, { useEffect, useState } from "react";

export function Lifecycle() {

    const [tick, setTick] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTick(tick => tick + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <h3>Lifecycle</h3>
            <p>You've been on this page for {tick} seconds</p>
        </div>
    );
}
