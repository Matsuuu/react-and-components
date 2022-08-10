import { LitElement, html, css } from "lit";

export class GreetingMessage extends LitElement {
    render() {
        return html`
            <h2>Hello from React Finland 2022!</h2>
            <p>I completed the Web Components workshop!</p>
        `;
    }

    static styles = css`
        :host {
            color: #FFF;
            margin-left: 2rem;
            font-size: 1.8rem;
        }
    `
}

customElements.define("greeting-message", GreetingMessage);
