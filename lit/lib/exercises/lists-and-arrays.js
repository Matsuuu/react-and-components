import { LitElement, html } from "lit";

export class ListsAndArrays extends LitElement {

    static properties = {
        numbers: { type: Array }
    }

    constructor() {
        super();

        this.numbers = [...new Array(5)].map(() => Math.floor(Math.random() * 20));
        console.log(this.numbers);

        this.languages = [
            { name: "Javascript", short: "JS" },
            { name: "Typescript", short: "TS" },
            { name: "Java", short: "Java" },
            { name: "Python", short: "Py" },
        ]

        this.languageList = this.languages.map(lang => (
            html`<li>${lang.name} (${lang.short})</li>`
        ));
    }

    randomizeNumbers() {
        this.numbers = [...new Array(Math.floor(Math.random() * 10))].map(() => Math.floor(Math.random() * 20));
    }

    render() {
        console.log(this.languageList);
        return html`
            <h3>Lists and Arrays</h3>

            <button .numbers=${this.numbers} @click=${this.randomizeNumbers}>So random</button>

            <ul>
                ${this.languageList}
            </ul>

            <ul>
                ${this.numbers.map(num => html`
                    <li>${num}</li>
                `)}
            </ul>

        `;
    }
}

customElements.define("lists-and-arrays", ListsAndArrays);
