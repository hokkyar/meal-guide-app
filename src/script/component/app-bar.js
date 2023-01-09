/* eslint-disable accessor-pairs */
/* eslint-disable space-before-function-paren */
class AppBar extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({
      mode: 'open'
    })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            width: 100%;
            background-color: #5D4954;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            cursor: default;
          }
          h2 {
            padding: 16px;
            font-family: 'Passions Conflict', cursive;
            font-size: 2.5rem;
          }
      </style>
      <h2>Meal Guide</h2>`
  }
}

customElements.define('app-bar', AppBar)
