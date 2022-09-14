import { LitElement, html } from "lit";

export class ChangeDetection extends LitElement {

    static properties = {
        timesClicked: {
            type: Number,
            attribute: "times-clicked",
            reflect: true
        }
    }

    constructor() {
        super();
        this.timesClicked = 0;
    }

    increment() {
        this.timesClicked += 1;
        console.log("foo!", this.timesClicked);
    }

    render() {
        return html`
            <h3>Change detection</h3>
            <button @click=${this.increment}>Incerement</button>
            <p>Clicked ${this.timesClicked} times</p>
        `;
    }
}

customElements.define("change-detection", ChangeDetection);
