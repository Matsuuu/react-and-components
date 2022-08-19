import { LitElement, html } from "lit";

export class ChangeDetection extends LitElement {
    render() {
        return html`
            <h3>Change Detection</h3>
        `;
    }
}

customElements.define("change-detection", ChangeDetection);
