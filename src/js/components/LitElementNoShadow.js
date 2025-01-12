import { LitElement } from "lit";

/**
 * Overwrites the default behaviour of encapsulating the component in shadow DOM by changing createRenderRoot.
 */
class LitElementNoShadow extends LitElement {
    createRenderRoot() {return this}
}

export default LitElementNoShadow;