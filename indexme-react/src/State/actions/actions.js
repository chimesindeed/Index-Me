import * as Adapter from '../../Adapter/adapter'

export const getCards = () => {
  return ((dispatch) => {
    Adapter.getCards()
    .then (response => {
    
      dispatch({type: "GET_CARDS", cards: response})
    })
  })
}

export const createCard = (values) => {
  const front= values.front;
  const back = values.back;
  
  return (Adapter.createCard(front, back)
    
  )
}