import { LitElement, svg } from "lit";

class RotatingTriangleComponent extends LitElement {
    render() {
        return svg `
            <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <polygon points="60,30 90,90 30,90" class="fill-black dark:fill-white">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 60 70"
                        to="360 60 70"
                        dur="7s"
                        repeatCount="indefinite" 
                    />
                </polygon>
            </svg>
        `;
    }
}

customElements.define("rotating-triangle-component", RotatingTriangleComponent);