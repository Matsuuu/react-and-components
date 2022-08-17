import React, { useState } from "react";

export function BubblingData() {
    return (
        <div>
            <h3>Nesting</h3>
            <WorkshopInfo />
        </div>
    );
}

export function WorkshopInfo() {

    const [attendants, setAttendants] = useState(0);

    function onAttendantCountChange(data) {
        if (data.operation === "Add") {
            setAttendants(attendants + parseInt(data.attendantCount));
        } else {
            setAttendants(attendants - parseInt(data.attendantCount));
        }
    }

    return (
        <div>
            <h3>Workshop attendant count:</h3>
            <p>{attendants} attendants</p>
            <WorkshopAttendantManager onAttendantCountChange={onAttendantCountChange} />
        </div>
    )
}

export function WorkshopAttendantManager(props) {

    const [attendantCount, setAttendantCount] = useState(0);

    function onAttendantInputChange(ev) {
        setAttendantCount(ev.target.value);
    }

    function addAttendants() {
        props.onAttendantCountChange({ operation: "Add", attendantCount })
        setAttendantCount(0);
    }

    function removeAttendants() {
        props.onAttendantCountChange({ operation: "Remove", attendantCount })
        setAttendantCount(0);
    }

    return (
        <div>
        <h3>Manage attendants</h3>
            <input type="number" value={attendantCount} onChange={onAttendantInputChange} />
            <button onClick={addAttendants}>Add</button>
            <button onClick={removeAttendants}>Remove</button>
        </div>
    )
}
