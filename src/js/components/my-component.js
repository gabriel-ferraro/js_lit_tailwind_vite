import { LitElement, css } from "lit";
import { html } from "lit-html";

class MyComponent extends LitElement {
    static properties = {
        // This makes _exclamationMarks a reactive property; 
        // This property triggers the reactive update cycle when changed, re-rendering the component.
        _exclamationMarks: { type: String }
    }

    // Set component CSS (This styles are component exclusive and exterior styles won't pollute the component).
    static styles = css `
        .my-button {
            font-size: 2rem;
            cursor: pointer;
            margin-bottom: 1rem;
        }
    `;

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
        return html `
            <h1>Hello ${this.getAttribute("phrase") ?? "something"} ${this._exclamationMarks}</h1>
            <button class="my-button" @click="${this.addExclamationMark}">Click me!</button>
        `;
    }
}

customElements.define("my-component", MyComponent);