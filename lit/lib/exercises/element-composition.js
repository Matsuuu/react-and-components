import { LitElement, html } from "lit";

export class ElementComposition extends LitElement {
    render() {
        return html`
            <h3>Element Composition</h3>

            <element-with-child-slot>
                <p>Hello Matsu</p>
            </element-with-child-slot>
        `;
    }
}

customElements.define("element-composition", ElementComposition);

export class ElementWithChildSlot extends LitElement {
    render() {
        return html`
        <div>
            <slot><p>Hello react finland!</p></slot>
        </div>

        `;
    }
}

customElements.define("element-with-child-slot", ElementWithChildSlot);
