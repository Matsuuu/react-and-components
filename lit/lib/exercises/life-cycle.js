import { LitElement, html } from "lit";

export class Lifecycle extends LitElement {

    static properties = {
        tick: { type: Number }
    }

    constructor() {
        super();
        this.tick = 0;
    }

    // componentDidMount
    // connectedCallback
    firstUpdated() {
        this.intervalId = setInterval(() => {
            this.tick += 1;
        }, 1000);
    }

    // componentDidUpdate
    updated(_changedProperties) {
        console.log("Updated!", { _changedProperties })
        console.log(this.tick)
    }

    // componentWillUnmount
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    render() {
        return html`
            <h3>Lifecycle</h3>
            <p>You've been on this page for ${this.tick} seconds</p>
        `;
    }
}

customElements.define("life-cycle", Lifecycle);
