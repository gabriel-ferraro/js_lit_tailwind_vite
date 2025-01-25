// Original source code for toggle switch acquired from W3schools: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch;

import { LitElement, css } from "lit";
import { html } from "lit-html";

class SwitchTemeCheckbox extends LitElement {
    static styles = css `
        .wrapper {
            padding-right: 11ch;
            padding-top: 1rem;
        }

        .label {
            margin-left: 60px;
            cursor: pointer;
        }

        input {
            width: 0;
            height: 0;
            opacity: 0;
        }

        .switch {
            user-select: none;
            white-space: nowrap;
            position: relative;
            display: block;
            margin-left: auto;
            width: 60px;
            height: 34px;
        }

        .slider {
            display: inline;
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #3b82f6;
            transition: .4s;
        }

        .slider:before {
            content: "";
            position: absolute;
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
        }

        input:checked + .slider {
            background-color: red;
        }

        input:focus + .slider {
            box-shadow: 0 0 10px #3b82f6;
        }

        input:checked + .slider:before {
            transform: translateX(26px);
        }

        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
    `;

    changeTheme = (event) => document.documentElement.classList.toggle("dark");

    render() {
        return html `
            <div class="wrapper">
                <label @change="${this.changeTheme}" class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                    <span class="label">Dark Mode</span>
                </label>
            </div>
        `;
    }
}

customElements.define("switch-theme-checkbox", SwitchTemeCheckbox);