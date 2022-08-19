import { LitElement, html } from "lit";

export class Properties extends LitElement {
    render() {
        return html`
            <h3>Properties</h3>
        `;
    }
}

customElements.define("using-properties", Properties);
