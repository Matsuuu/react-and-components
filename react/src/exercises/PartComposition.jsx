import React from "react";

export function PartComposition() {

    function renderButton() {
        return <button>Click me!</button>
    }

    const divider = <div className="divider"></div>;

    return (
        <div>
            <h3>Part Composition</h3>

            {divider}

            {renderButton()}

            {divider}
        </div>
    )
}
