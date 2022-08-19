import React from "react";
import "./Button.css";

const redButtonStyle = {
    color: "#FFF",
    backgroundColor: "#EE4B2B",
    padding: "0.4rem"
}

export function Styling() {
    return (
        <div>
            <h3>Styling</h3>

            <button style={redButtonStyle}>
                Red Button
            </button>

            <div className="divider"></div>

            <button style={{ backgroundColor: "blue", color: "#FFF", padding: "0.4rem" }}>
                Blue button
            </button>

            <div className="divider"></div>

            <button className="green-button">
                Green Button
            </button>

            <div className="divider"></div>

        </div>
    )
}
