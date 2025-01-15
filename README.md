## JS-Lit-Tailwind CSS-Vite - Template

### What's this?
A template for utilizing the previously mentioned technologies in a simple manner, presenting short examples on:

- Making a multi-page Vite build.
- Integrating a Lit generated web-component in HTML.
- Tailwind CSS available outside and inside Lit web-components.
- A production and development build with the mentioned features working together.

### How to make a multi-page project that is correctly bundled by Vite?

Vite is frequently used alongside front-end libraries that are single-paged, If a multi-page project is being made, then the file vite.config.js needs to be altered; this way vite will correctly handle the code-splitting and bundle your application for homologation/development:

```sh
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                exampleMultiPage: resolve(__dirname, 'pages/examplePage.html')
            },
        },
    },
})
```

### How to add a Lit component in an HTML page?

<details>
<summary>Example</summary>

```sh
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test my-component</title>
</head>

<body>
    <my-component></my-component>

    <script type="module">
        import { LitElement } from "lit";
        import { html } from "lit-html";

        class MyComponent extends LitElement {
            static properties = {
                // This makes _exclamationMarks a reactive property; 
                // This property triggers the reactive update cycle when changed, re-rendering the component.
                _exclamationMarks: { state: true }
            };

            constructor() {
                super(); // When a constructor is declared, super cosntructor method must be called.
                this._exclamationMarks = "!"; // Set property initial value on constructor when needed.
            }

            addExclamationMark(event) {
                // The event bind indicated by the button <button @click="${this.addExclamationMark}"> calls this method,
                // since this._exclamationMarks is set to be reactive, this will update the component reactively 
                // and an exclamation mark will be concateneted at the end of the Hello World.
                this._exclamationMarks += "!";
            }

            render() {
                return html`
                    <h1>Hello ${this.getAttribute("phrase") ?? "something"} ${this._exclamationMarks}</h1>
                    <button style="font-size: 30px; cursor: pointer; margin-bottom: 30px" @click="${this.addExclamationMark}">Click me!</button>`;
                }
            }

            customElements.define("my-component", MyComponent);
        </script>
</body>

</html>
```
</details>

### How to make so Tailwind css can be used inside a Lit component?

You should probably avoid this since a web compoente is meant to be isolated from the rest of DOM inside its shadow-DOM, if you don't mind having external CSS inside the component, then:

<details>
<summary>Make all components extend this component:</summary>

```sh
import { LitElement } from "lit";

/**
 * Overwrites the default behaviour of encapsulating the component in an isolated shadow DOM by changing createRenderRoot.
 */
class LitElementNoShadow extends LitElement {
    createRenderRoot() {return this}
}

export default LitElementNoShadow;
```
</details>

There are other (very bad) alternatives, like adding a style tag inside the component, but this will add overhead in the middle of the component rendering, better to avoid.

### Running template

```sh
npm i
npm run dev
```

# License
[MIT](LICENSE)