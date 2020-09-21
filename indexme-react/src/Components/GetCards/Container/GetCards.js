import '../../Styles/styles.css'
import React from 'react'
import {connect} from 'react-redux'
import {getCards} from '../../../State/actions/actions'

class CardList extends React.Component {
  
  handleClick= () => { this.props.getCards() }
      
  render() {
    return (
      <div>
        <div class="column-container mt-5">
        
          <div class="left-col mr-auto">
            <button onClick = {this.handleClick}>Get Cards</button>
          </div>
    
          <div class="right-col">
            {      
              this.props.state ? this.props.state.map(card => {return (<h1>{card.front}</h1>)})
                : <h1>IMPORT YOUR CARDS</h1>
            } 
          </div>
        </div>
      </div>
      
      )
  }
}
const mapStateToProps =(state) => {
  return {state: state.cards.cards}
}


export default connect(mapStateToProps, {getCards} )(CardList)