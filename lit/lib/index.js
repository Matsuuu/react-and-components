// @ts-nocheck
import { html, render } from "lit";
import "./exercises/bubbling-data.js";
import "./exercises/change-detection.js";
import "./exercises/conditional-rendering.js";
import "./exercises/element-composition.js";
import "./exercises/life-cycle.js";
import "./exercises/lists-and-arrays.js";
import "./exercises/part-composition.js";
import "./exercises/styling-elements.js";
import "./exercises/using-expressions.js";
import "./exercises/using-properties.js";
import "./exercises/working-with-shadow-dom.js";

const parts = [
    { href: "/properties", title: "Properties" },
    { href: "/change-detection", title: "Change detection" },
    { href: "/expressions", title: "Expression" },
    { href: "/lifecycle", title: "Lifecycle" },
    { href: "/conditional-rendering", title: "Conditional Rendering" },
    { href: "/lists-and-arrays", title: "Lists and arrays" },
    { href: "/bubbling", title: "Bubbling" },
    { href: "/element-composition", title: "Composing elements" },
    { href: "/part-composition", title: "Composing parts" },
    { href: "/working-with-shadow-dom", title: "Working with shadow dom" }, { href: "/styling", title: "Styling components" },
];

function renderView() {
    const app = document.querySelector("#app");
    render(html`
      <h2>Web Components Workshop</h2>


        <section>
            ${renderDemo()}

            ${renderLinkList()}
        </section>
    `,
        app);
}

function renderDemo() {
    const path = window.location.pathname;

    switch (path) {
        case "/properties":
            return html`<using-properties name="React Finland"></using-properties>`;
        case "/change-detection":
            return html`<change-detection times-clicked=${50}></change-detection>`;
        case "/expressions":
            return html`<using-expressions></using-expressions>`;
        case "/lifecycle":
            return html`<life-cycle></life-cycle>`;
        case "/conditional-rendering":
            return html`<conditional-rendering></conditional-rendering>`;
        case "/lists-and-arrays":
            return html`<lists-and-arrays></lists-and-arrays>`;
        case "/bubbling":
            return html`<bubbling-data></bubbling-data>`;
        case "/element-composition":
            return html`<element-composition></element-composition>`;
        case "/part-composition":
            return html`<part-composition></part-composition>`;
        case "/styling":
            return html`<styling-elements></styling-elements>`;
        case "/working-with-shadow-dom":
            return html`<working-with-shadow-dom>
        <p>Hello!</p>
        </working-with-shadow-dom>`;
        default:
            return html``
    }
}

function renderLinkList() {
    return html`
        <ul>
        ${parts.map(part => html`
            <li key=${part.href}><a href=${part.href}>${part.title}</a></li>
        `)}
        </ul>
        `
}

renderView();
