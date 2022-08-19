import { LitElement, html } from "lit";

export class ElementComposition extends LitElement {
    render() {
        return html`
            <h3>Element Composition</h3>
        `;
    }
}

customElements.define("element-composition", ElementComposition);
