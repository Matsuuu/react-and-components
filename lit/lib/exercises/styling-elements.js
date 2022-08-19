import { LitElement, html } from "lit";

export class StylingElements extends LitElement {
    render() {
        return html`
            <h3>Styling Elements</h3>
        `;
    }
}

customElements.define("styling-elements", StylingElements);
