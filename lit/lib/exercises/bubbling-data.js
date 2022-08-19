import { LitElement, html } from "lit";

export class BubblingData extends LitElement {
    render() {
        return html`
            <h3>Bubbling Data</h3>
        `;
    }
}

customElements.define("bubbling-data", BubblingData);
