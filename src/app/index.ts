import render from "../core";
import { html, ExtJsDefaultComponent } from "../core/component";

render(
    document.body,
    new ExtJsDefaultComponent(html`
        <button onclick=${() => console.log("hello world")}>
            ${"Content"}
        </button>
    `)
);
