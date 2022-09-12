import { html, LitElement } from "lit";

export class LitButton extends LitElement {

    static properties = {
        clickCount: { type: Number },
        disabled: { type: Boolean, reflect: true }
    }

    constructor() {
        super();
        this.clickCount = 0;
        this.disabled = false;
    }

    handleClick() {
        this.clickCount += 1;
        this.sendEvent();
    }

    sendEvent() {
        const clickEvent = new CustomEvent("button-incremented", {
            detail: {
                clickCount: this.clickCount
            }
        });
        this.dispatchEvent(clickEvent);
    }

    render() {
        return html`
            <button @click=${this.handleClick} ?disabled=${this.disabled}>
                Click me!
            </button>
            <p>Click count: ${this.clickCount}</p>
        `;
    }
}

if (!customElements.get("lit-button")) {
    customElements.define("lit-button", LitButton);
}
