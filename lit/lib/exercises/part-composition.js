import { LitElement, html } from "lit";

export class PartComposition extends LitElement {
    render() {
        return html`
            <h3>Part Composition</h3>
        `;
    }
}

customElements.define("part-composition", PartComposition);
