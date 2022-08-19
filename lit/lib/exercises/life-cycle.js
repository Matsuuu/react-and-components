import { LitElement, html } from "lit";

export class Lifecycle extends LitElement {
    render() {
        return html`
            <h3>Lifecycle</h3>
        `;
    }
}

customElements.define("life-cycle", Lifecycle);
