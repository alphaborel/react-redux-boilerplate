// axios is a npm modual that makes it easier to write fetch/post calls to an API
import axios from 'axios'

export const DO_SOMETHING = "DO_SOMETHING"
export const DO_SOMETHING_ELSE = "DO_SOMETHING_ELSE"

//this is where you grab your API data. Many API different API calls can go here.
export const fetchSomething = () => {
  return (dispatch) => {
    axios.get('http://#/')
    .then(response => {
      dispatch({
        type: DO_SOMETHING,
        payload: response.data,
      })
    })

  }
}
