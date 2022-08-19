// @ts-nocheck
import { html, render } from "lit";

const parts = [
    { href: "/properties", title: "Properties" },
    { href: "/change-detection", title: "Change detection" },
    { href: "/expressions", title: "Expression" },
    { href: "/lifecycle", title: "Lifecycle" },
    { href: "/lifecycle-class", title: "Lifecycle (class)" },
    { href: "/conditional-rendering", title: "Conditional Rendering" },
    { href: "/lists-and-arrays", title: "Lists and arrays" },
    { href: "/bubbling", title: "Bubbling" },
    { href: "/element-composition", title: "Composing elements" },
    { href: "/part-composition", title: "Composing parts" },
    { href: "/styling", title: "Styling components" },
    { href: "/working-with-shadow-dom", title: "Working with shadow dom" },
];

function renderView() {
    const app = document.querySelector("#app");
    render(html`
      <h2>Web Components Workshop</h2>

        ${renderDemo()}

        <section class="links">
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
            return html`<change-detection></change-detection>`;
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
            return html`<part-composition></part-composition`;
        case "/styling":
            return html`<styling-elements></styling-elements`;
        case "/working-with-shadow-dom":
            return html`<working-with-shadow-dom></working-with-shadow-dom>`;
        default:
            return html``
    }
}

function renderLinkList() {

    const linkSection = document.querySelector(".links");

    return html`
        <ul>
        ${parts.map(part => html`
            <li key=${part.href}><a href=${part.href}>${part.title}</a></li>
        `)}
        </ul>
        `
}

renderView();
