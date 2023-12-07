import { LitElement, css, html } from "lit";

export class CardComponent extends LitElement {
  constructor() {
    super();
    this.bolea = false;
  }
  static properties = {
    title: { type: String, attribute: "title" },
    bolea: { type: Boolean },
  };

  static styles = css`
    .card {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: var(--card-padding, 1rem);
      background-color: var(--card-background-color, purple);
      color: var(--card-color, white);
    }
  `;
  render() {
    this.bolea ? console.log("verdadero") : console.log("falso");
    return html`<div class="card">
      <h1>${this.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>`;
  }
}

window.customElements.define("card-component", CardComponent);
