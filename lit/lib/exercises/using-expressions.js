import { LitElement, html } from "lit";

export class UsingExpressions extends LitElement {

    handleInput(event) {

        console.log(event);
    }
    render() {
        return html`
            <h3>Expressions</h3> 

            <p><b>Regular Content based expressions</b></p>
            <p>2 + 2 is ${2 + 2}</p>

            <p><b>Attribute expressions</b></p>
            <input placeholder=${new Date().toString()} />

            <p><b>Boolean expressions</b></p>
            <input type="checkbox" ?checked=${Math.random() > 0.5} />

            <p><b>Event expressions</b></p>
            <input type="checkbox" @input=${this.handleInput} />
        `;
    }
}

customElements.define("using-expressions", UsingExpressions);
