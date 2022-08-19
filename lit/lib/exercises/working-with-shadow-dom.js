import { LitElement, html } from "lit";

export class WorkingWithShadowDom extends LitElement {
    render() {
        return html`
            <h3>Working With Shadow DOM</h3>
        `;
    }
}

customElements.define("working-with-shadow-dom", WorkingWithShadowDom);
