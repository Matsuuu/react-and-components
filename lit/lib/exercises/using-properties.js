import { LitElement, html } from "lit";

export class Properties extends LitElement {

    static properties = {
        name: { type: String }
    }

    constructor() {
        super();
        this.name = "World!"
    }

    render() {
        return html`
            <h3>Properties</h3>
            <p>Hello, ${this.name}</p>
        `;
    }
}

customElements.define("using-properties", Properties);
