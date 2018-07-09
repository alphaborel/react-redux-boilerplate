import { DO_SOMETHING, DO_SOMETHING_ELSE } from '../actions'


export const sample = (sample = [], action) => {
  switch (action.type) {
    case DO_SOMETHING:
      return action.payload
    default:
      return sample
  }
}

export const sampleTwo = (sample = [], action) => {
  switch (action.type) {
    case DO_SOMETHING_ELSE:
      return action.payload
    default:
      return sample
  }
}
