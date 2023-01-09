/* eslint-disable accessor-pairs */
/* eslint-disable space-before-function-paren */
import './meal-item.js'
import './meal-detail.js'

class MealList extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({
      mode: 'open'
    })
  }

  set meals(meals) {
    this._meals = meals
    this.render()
  }

  set detail(meals) {
    this._meals = meals
    this.renderDetail()
  }

  renderDetail() {
    this.shadowDOM.innerHTML = ''
    this._meals.forEach(meal => {
      const mealDetailItem = document.createElement('meal-detail')
      mealDetailItem.meal = meal
      this.shadowDOM.appendChild(mealDetailItem)
    })
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      :host{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 10px;
      }
    </style>
    `
    this._meals.forEach(meal => {
      const mealItemElement = document.createElement('meal-item')
      mealItemElement.meal = meal
      this.shadowDOM.appendChild(mealItemElement)
    })
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>`
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`
  }
}

customElements.define('meal-list', MealList)
