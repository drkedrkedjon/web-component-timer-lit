import { LitElement, html, css } from "lit";

export class LitCard extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="card">
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quae voluptatem voluptate consequatur
          quos, voluptas minima quod quas. Quisquam voluptatum, quibusdam, quia,
          quae voluptatem voluptate consequatur quos, voluptas minima quod quas.
        </p>
      </div>
    `;
  }
}

customElements.define("lit-card", LitCard);
