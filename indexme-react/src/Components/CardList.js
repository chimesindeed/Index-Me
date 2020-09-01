import React from 'react'
import Adapter from '../Adapter/adapter';
import Card from '../Objects/Card'
import Button from 'react-bootstrap/esm/Button';

class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.adapter = new Adapter();
    this.state = { allCards: [] }
  }
  
  getCards = props =>{
    this.adapter
       .getCards()
       .then(cards => 
         cards.forEach(card => {
           const element = new Card(card)
           let newCards = this.state.allCards.slice();
           newCards = [...newCards, element]
           this.setState ({ allCards: newCards})
        })
      )
      
      .then(cards => console.log(this.state.allCards))
    
  }
  render(){
    return (
      <Button onClick = {this.getCards} />
    )
  }
}
export default CardList