import { LitElement, html } from "lit";

export class BubblingData extends LitElement {
    render() {
        return html`
            <h3>Bubbling Data</h3>
            <workshop-info></workshop-info>
        `;
    }
}

customElements.define("bubbling-data", BubblingData);

class WorkshopInfo extends LitElement {

    static properties = {
        attendants: { type: Number }
    }

    constructor() {
        super();
        this.attendants = 0;
    }

    onAttendantCountChange(event) {
        const data = event.detail;
        if (data.operation === "Add") {
            this.attendants += parseInt(data.attendantCount);
        } else {
            this.attendants -= parseInt(data.attendantCount);
        }
    }

    render() {
        return html`
            <div>
                <h3>Workshop attendant count:</h3>
                <p>${this.attendants} attendants</p>
                <!--<WorkshopAttendantManager onAttendantCountChange={onAttendantCountChange} /> -->
                <workshop-attendant-manager @on-attendant-count-change=${this.onAttendantCountChange}></workshop-attendant-manager>
            </div>
        `;
    }
}

customElements.define("workshop-info", WorkshopInfo);


class WorkshopAttendantManager extends LitElement {

    addAttendants() {
        const attendantCount = this.inputValue;
        const event = new CustomEvent("on-attendant-count-change", {
            detail: {
                operation: "Add",
                attendantCount
            }
        });
        this.dispatchEvent(event);
    }

    removeAttendants() {
        const attendantCount = this.inputValue;
        const event = new CustomEvent("on-attendant-count-change", {
            detail: {
                operation: "Remove",
                attendantCount
            }
        });
        window.dispatchEvent(event);
    }

    get inputValue() {
        return this.shadowRoot.querySelector("input")?.value ?? 0;
    }

    set inputValue(value) {
        this.shadowRoot.querySelector("input").value = value.toString();
    }

    render() {
        return html`
            <h3>Manage attendants</h3>
            <input type="number" value=${this.inputValue} />
            <button @click=${this.addAttendants}>Add</button>
            <button @click=${this.removeAttendants}>Remove</button>
        `
    }
}

customElements.define("workshop-attendant-manager", WorkshopAttendantManager);
