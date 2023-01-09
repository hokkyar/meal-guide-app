/* eslint-disable space-before-function-paren */
import axios from 'axios'
class DataSource {
  static searchMeal(keyword) {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(({ data: { meals: responseJson } }) => {
        if (responseJson) {
          return Promise.resolve(responseJson)
        } else {
          return Promise.reject(new Error(`${keyword} is not found!`))
        }
      })
  }

  static searchMealById(id) {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(({ data: { meals: responseJson } }) => {
        if (responseJson) {
          return Promise.resolve(responseJson)
        } else {
          return Promise.reject(new Error(`${id} is not found!`))
        }
      })
  }
}

export default DataSource
