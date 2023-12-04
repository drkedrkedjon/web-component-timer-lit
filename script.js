const father = document.querySelector("#father");
const child = document.querySelector("#child");
const grandchild = document.querySelector("#grand-child");

class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  conectedCallback() {
    render();
    console.log("sasa");
  }

  render() {
    const template = document.createElement("template");
    template.innerHTML = `<p>My Component</p>`;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("my-component", MyComponent);
