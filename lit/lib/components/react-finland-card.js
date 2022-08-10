import { LitElement, html } from "lit";
import "./image-camera.js";

export class ReactFinlandCard extends LitElement {

    render() {
        return html`<image-camera></image-camera>`;
    }
}

customElements.define("react-finland-card", ReactFinlandCard);
