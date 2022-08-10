import { css, html, LitElement } from "lit";
import { when } from "lit/directives/when.js";
import { requestAndEnableWebcam, takeScreenshot } from "../service/webcam-access.js";
import "./icon-button.js";

const IMAGE_STATES = {
    DEFAULT: "DEFAULT",
    VIDEO_ON: "VIDEO_ON",
    PICTURE_TAKEN: "PICTURE_TAKEN"
}

export class ImageCamera extends LitElement {

    static properties = {
        imageStream: { type: Object },
        screenShot: { type: Object },
        imageState: { type: String }
    }


    constructor() {
        super();
        this.imageStream = undefined;
        this.screenShot = undefined;
        this.imageState = IMAGE_STATES.DEFAULT;
    }

    firstUpdated() {
        this.enableWebcam();
    }

    updated(_changedProperties) {
        const videoElement = this.shadowRoot.querySelector("video");
        if (_changedProperties.has("imageState") && this.imageState === IMAGE_STATES.VIDEO_ON) {
            videoElement.srcObject = this.imageStream;
        }
    }

    async enableWebcam() {
        const result = await requestAndEnableWebcam();
        if (result.success) {
            this.imageStream = result.stream;
            this.imageState = IMAGE_STATES.VIDEO_ON;
        }
    }

    takeAShot() {
        const video = this.shadowRoot.querySelector('#video-element');
        const image = takeScreenshot(video);
        this.screenShot = image;
        this.imageState = IMAGE_STATES.PICTURE_TAKEN;
    }

    reset() {
        this.imageState = IMAGE_STATES.VIDEO_ON;
    }

    renderImage() {
        switch (this.imageState) {
            case IMAGE_STATES.DEFAULT:
                return html`<img src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg" />`;
            case IMAGE_STATES.VIDEO_ON:
                return html`<video autoplay="true" id="video-element">`;
            case IMAGE_STATES.PICTURE_TAKEN:
                return html`<img src="${this.screenShot}" />`;
        }
    }

    render() {
        return html`
            ${this.renderImage()}

        <div class="buttons">
            <icon-button @click=${this.reset} icon="arrow-counterclockwise"></icon-button>
            <icon-button @click=${this.takeAShot} icon="camera"></icon-button>
        </div>
        `;
    }

    static styles = css`
        :host {
            position: relative;
        }

        :host(:hover) .buttons {
            opacity: 1;
        }

        .buttons {
            opacity: 0;
            display: flex;
            flex-direction: column;
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            gap: 1rem;
            transition: 200ms ease-in-out;
        }

        img, video {
            width: 400px;
        }
    `;
}

customElements.define("image-camera", ImageCamera);
