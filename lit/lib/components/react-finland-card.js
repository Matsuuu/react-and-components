import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";
import { requestAndEnableWebcam, takeScreenshot } from "../service/webcam-access.js";

export class ReactFinlandCard extends LitElement {

    static properties = {
        imageStream: { type: Object },
        screenShot: { type: Object }
    }


    constructor() {
        super();
        this.imageStream = undefined;
        this.screenShot = undefined;
    }

    firstUpdated() {
        this.enableWebcam();
    }

    updated(_changedProperties) {
        const videoElement = this.shadowRoot.querySelector("video");
        if (_changedProperties.has("imageStream") && videoElement) {
            videoElement.srcObject = this.imageStream;
        }
    }

    async enableWebcam() {
        const result = await requestAndEnableWebcam();
        if (result.success) {
            this.imageStream = result.stream;
        }
    }

    takeAShot() {
        const video = this.shadowRoot.querySelector('#video-element');
        const image = takeScreenshot(video);
        this.screenShot = image;
    }

    render() {
        return html`
        ${this.imageStream 
            ? html`<video autoplay="true" id="video-element">`
            : html`<img src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg" />`
        }

        <button @click=${this.takeAShot}>Take a screenshot</button>

        ${when(this.screenShot, () => html`<img src="${this.screenShot}" />`)}
        `;
    }

    static styles = css`
        :host {

        }

        img, video {
            width: 400px;
        }
    `;
}

customElements.define("react-finland-card", ReactFinlandCard);