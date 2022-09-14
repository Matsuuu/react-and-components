import { LitElement, html, css } from "lit";

export class WorkingWithShadowDom extends LitElement {

    static properties = {
        size: { type: Number, reflect: true },
        hovered: { type: Boolean, reflect: true }
    }

    static styles = [
        css`
        :host {
            --multiplier: 1;
        }

        :host([hovered]) {
            background: green;
        }

        h2 {
            color: var(--success-button-background);
            font-size: calc(2rem * var(--multiplier));
        }
    `];

    constructor() {
        super();
        this.size = 1;
        this.hovered = false;
    }

    firstUpdated() {
        this.addEventListener("mouseenter", () => {
            this.hovered = true;
        })
        this.addEventListener("mouseleave", () => {
            this.hovered = false;
        })
    }

    updated() {
        this.style.setProperty("--multiplier", this.size.toString())
    }

    render() {
        return html`
            <h2>Working With Shadow DOM</h2>
        `;
    }
}

customElements.define("working-with-shadow-dom", WorkingWithShadowDom);
