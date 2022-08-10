import { LitElement, html, css } from "lit";
import "./image-camera.js";
import "./greeting-message.js";

export class ReactFinlandCard extends LitElement {

    render() {
        return html`
            <image-camera></image-camera>
            <greeting-message></greeting-message>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            margin: 1rem;
            width: 90%;
            background: #3f51b5;
            border-radius: 8px;
            padding: 1rem;
        }
    `;
}

customElements.define("react-finland-card", ReactFinlandCard);
