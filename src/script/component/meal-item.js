/* eslint-disable accessor-pairs */
/* eslint-disable space-before-function-paren */
import DataSource from '../data/data-source.js'
import '../component/meal-list.js'
const mealListElement = document.querySelector('meal-list')

class MealItem extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({
      mode: 'open'
    })
  }

  set meal(meal) {
    this._meal = meal
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
          margin-top: 20px;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
        }
        
        .fan-art-meal {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
          transition: .3s;
        }
        
        .meal-info {
          padding: 24px;
          background: white;
          margin-top: -4px;
        }

        .fan-art-meal:hover{
          transform: scale(1.1);
        }
      
        .meal-info > h2 {
          font-weight: 600;
          text-align: center;
          color: #5D4954;
        }
      
        .meal-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      <div data-aos="fade-down" class='meal' data-idmeal="${this._meal.idMeal}">  
        <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Thumbnail">
        <div class="meal-info">
            <h2>${this._meal.strMeal}</h2>
        </div>
      </div>
      `
    this.shadowDOM.querySelector('.meal').addEventListener('click', async function () {
      const result = await DataSource.searchMealById(this.dataset.idmeal)
      mealListElement.detail = result
    })
  }
}

customElements.define('meal-item', MealItem)
