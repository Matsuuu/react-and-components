import { css, html, LitElement } from "lit";

const BOOTSTRAP_URL_BASE =
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/icons/{ICON}.svg";

export class IconButton extends LitElement {

    static properties = {
        icon: { type: String },
        size: { type: String }
    }

    constructor() {
        super();
        this.icon = "";
        this.size = "1.5";
    }

    /**
     * @param {import("lit").PropertyValues} _changedProperties
     */
    updated(_changedProperties) {
        if (_changedProperties.has("size")) {
            this.style.setProperty("--size", this.size);
        }
    }

    getIconUrl() { return BOOTSTRAP_URL_BASE.replace("{ICON}", this.icon); }

    render() {
        return html`
            <button>
                <img src="${this.getIconUrl()}" />
            </button>
        `;
    }

    static styles = css`

    :host {
        --size: 1.5;
        cursor: pointer;
        display: flex;
    }

    button {
        cursor: pointer;
        height: calc(var(--size) * 1.4rem);
        width: calc(var(--size) * 1.4rem);
        padding: calc(var(--size) * 4px);
        border-radius: 50%;
        background: #002fa9;
        color: #FFF;
        border: 1px solid #FFF;
    }

    img {
        height: 100%;
        width: 100%;
        filter: invert(1);
    }
    `
}

customElements.define("icon-button", IconButton);
