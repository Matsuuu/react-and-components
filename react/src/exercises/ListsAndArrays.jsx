import React from "react";

export function ListsAndArrays() {

    const numbers = [...new Array(5)].map(() => Math.floor(Math.random() * 20));
    console.log(numbers);

    const languages = [
        { name: "Javascript", short: "JS" },
        { name: "Typescript", short: "TS" },
        { name: "Java", short: "Java" },
        { name: "Python", short: "Py" },
    ]

    const languageList = languages.map(lang => (
        <li key={lang.short}>{lang.name} ({lang.short})</li>
    ));

    return (
        <div>
            <h3>Lists And Arrays</h3> 

            <p>Numbers: </p>
            <ul>
                {numbers.map(num => <li key={num}>{num}</li>)}
            </ul>

            <ul>
                {languageList}
            </ul>
        </div>
    )
}
