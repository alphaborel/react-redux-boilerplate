import axios from 'axios'

export const DO_SOMETHING = "DO_SOMETHING"
export const DO_SOMETHING_ELSE = "DO_SOMETHING_ELSE"

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
