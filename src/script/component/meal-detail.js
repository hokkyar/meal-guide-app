/* eslint-disable accessor-pairs */
/* eslint-disable space-before-function-paren */
class MealDetail extends HTMLElement {
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
          color: #5D4954;
        }

        :host {
          display: block;
          margin-top: 20px;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          cursor: default;
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
        }
      
        .meal-info > h2 {
          font-weight: lighter;
          font-size: 2rem;
        }
      
        .meal-info > p {
          margin-top: 15px;
          font-size: 1.1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
          text-align: justify;
        }

      </style>
      <div class='meal' data-idmeal="${this._meal.idMeal}">  
        <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Thumbnail">
        <div class="meal-info">
            <h2>${this._meal.strMeal}</h2>
            <p><strong>Category</strong> : ${this._meal.strCategory}</p>
            <p><strong>Area</strong> : ${this._meal.strArea}</p>
            <p><strong>Instructions</strong> :</p>
            <p>${this._meal.strInstructions}</p>
        </div>
      </div>
      `
  }
}

customElements.define('meal-detail', MealDetail)
