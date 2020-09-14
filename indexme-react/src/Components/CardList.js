import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import {connect} from 'react-redux'
import {getCard} from '../Actions/Actions.js'

class CardList extends React.Component {
  
  handleClick= () => {
    this.props.getCard()
    
  }
  render(){
    console.log("INSIDE COMPONENT", this.props.cards)
    return (
      <button onClick = {this.handleClick}>Get Cards</button>
    )
  }
}
const mapStateToProps =(state) => {
  return {cards: state}
}
export default connect(mapStateToProps, {getCard} )(CardList)