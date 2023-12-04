class MiButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.color = this.getAttribute("color") === true;
    this.btnText = this.getAttribute("btn-text")
      ? this.getAttribute("btn-text")
      : "Button";
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["color"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "color") {
      newValue === null ? (this.color = false) : (this.color = true);
    }
    this.render();
  }

  render() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = "";
    shadowRoot.appendChild(this.htmlToElement());
    console.log(this.color);
  }

  htmlToElement() {
    const estaNoEsta = this.color ? true : false;
    const html = `
      <style>
        .button {
          background-color: ${this.color ? "green" : "red"};
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }
      </style>
      <button class="button">
        <slot name="btn-text">${this.btnText}</slot>
      </button>
    `;
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.cloneNode(true);
  }
}

window.customElements.define("mi-button", MiButton);
