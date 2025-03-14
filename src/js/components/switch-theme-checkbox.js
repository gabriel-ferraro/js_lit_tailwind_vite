import LitElementNoShadow from "./LitElementNoShadow";
import { html } from "lit-html";

class SwitchTemeCheckbox extends LitElementNoShadow {
    changeTheme = (event) => document.documentElement.classList.toggle("dark");

    render() {
        return html `
            <label class="m-4 w-fit ml-auto flex cursor-pointer text-dark dark:text-white">
                <span class="mr-4">Dark Mode</span>
                <div class="relative">
                    <input @change="${this.changeTheme}" class="peer sr-only" type="checkbox" />
                    <div class="block w-14 h-8 rounded-full bg-red-500 peer-checked:bg-blue-500 peer-focus:shadow-focused-enabled peer-checked:peer-focus:shadow-focused"></div>
                    <div
                        class="absolute left-1 top-1 flex w-6 h-6 transition bg-white rounded-full
                        peer-checked:translate-x-full peer-checked:bg-white">
                    </div>
                </div>
            </label>
        `;
    }
}

customElements.define("switch-theme-checkbox", SwitchTemeCheckbox);