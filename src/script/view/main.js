import '../component/meal-list.js'
import '../component/search-bar.js'
import DataSource from '../data/data-source.js'

const main = () => {
  const searchElement = document.querySelector('search-bar')
  const mealListElement = document.querySelector('meal-list')
  const categories = document.querySelectorAll('.flex-container>div')

  const quickSearch = () => {
    categories.forEach((category) => {
      category.addEventListener('click', async function () {
        try {
          const result = await DataSource.searchMeal(this.textContent)
          renderResult(result)
        } catch (message) {
          fallbackResult(message)
        }
      })
    })
  }

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value)
      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const renderResult = results => {
    mealListElement.meals = results
  }

  const fallbackResult = message => {
    mealListElement.renderError(message)
  }

  onButtonSearchClicked() // onload fetching
  quickSearch()
  searchElement.clickEvent = onButtonSearchClicked
}

export default main
