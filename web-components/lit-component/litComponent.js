import { LitElement, css, html } from "lit";

export class LitComponent extends LitElement {
  static properties = {
    btnColor: {
      type: String,
    },
    content: {
      type: String,
    },
    doble: {
      type: Boolean,
    },
  };

  constructor() {
    super();
    this.btnColor = "btn-primary";
    this.content = "Button";
    this.doble = false;
  }

  static styles = css`
    .btn {
      border: none;
      border-radius: 4px;
      padding: 1rem 3rem;
      font-size: 1.4rem;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    }
    .btn-primary {
      background-color: var(--btn-primary-background-color, #333);
      color: var(--btn-color, #999);
    }
    .btn-secondary {
      background-color: var(--btn-background-color, #999);
      color: var(--btn-color, #333);
    }
  `;
  render() {
    return html`
      <button class="btn ${this.btnColor}">${this.content}</button>
      ${this.doble
        ? html`<button class="btn ${this.btnColor}">${this.content}</button>`
        : ""}
    `;
  }
}

window.customElements.define("lit-component", LitComponent);
