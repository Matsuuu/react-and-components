import { LitElement, html } from "lit";

export class ConditionalRendering extends LitElement {
    render() {
        return html`
            <h3>Conditional Rendering</h3>
        `;
    }
}

customElements.define("conditional-rendering", ConditionalRendering);
