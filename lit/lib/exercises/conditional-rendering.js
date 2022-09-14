import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";

export class ConditionalRendering extends LitElement {

    renderMessage() {
        if (false) return html``;
        return html`<p>Wow, that's over ten!</p>`;
    }

    render() {
        const count = 10;

        let countMessage = html``;
        if (count > 10) {
            countMessage = html`<p>Wow, that's over ten!</p>`;
        }

        return html`
            <h3>Conditional Rendering</h3>

            ${countMessage}

            ${count > 10 && html`<p>Wow, that's over ten!</p>`}

            ${when(count > 10, () => html`<p>Wow, that's over ten!</p>`)}

            ${count > 10 ? html`<p>Wow, that's over ten!</p>` : html``}

            ${count > 10 ? html`<p>Wow, that's over ten!</p>` : ''}

            ${count > 10 ? html`<p>Wow, that's over ten!</p>` : undefined}

            ${count > 10 ? html`<p>Wow, that's over ten!</p>` : null}

            ${this.renderMessage()}

        `;
    }
}

customElements.define("conditional-rendering", ConditionalRendering);
