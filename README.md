## JS-Lit-Tailwind CSS-Vite - Template

## Template unfinished

### What's this?
A template for utilizing the previously mentioned technologies in a simple manner, presenting short examples on:

- Making a multi-page Vite build.
- Integrating a Lit generated web-component in HTML.
- Tailwind CSS available outside and inside Lit web-components.
- A production and development build with the mentioned features working together.

### How to make a multi-page project that is correctly bundled by Vite?

### How to add a Lit component in a HTML page?

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

- Option 1:

```sh

```

- Option 2:


### Running template

```sh
npm i
npm run dev
```

# License
[to do](LICENSE)