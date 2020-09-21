import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const defaultCardsState = []
const cardReducer = (state = defaultCardsState, action) => {
  if (action.type === "GET_CARDS")
    return {cards: action.cards}
  else return state
  }

const rootReducer = combineReducers({
  cards: cardReducer,
  form: formReducer
})



export default rootReducer