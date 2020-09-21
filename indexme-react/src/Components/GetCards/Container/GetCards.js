import '../../Styles/styles.css'
import React from 'react'
import {connect} from 'react-redux'
import {getCards} from '../../../State/actions/actions'

class CardList extends React.Component {
  
  handleClick= () => { this.props.getCards() }
      
  render() {
    return (
      <div>
        <div class="column-container mt-0">
        
          <div class="left-col mr-auto">
            <button onClick = {this.handleClick}>Get Cards</button>
          </div>
    
          <div class="right-col mr-auto">
            {      
              this.props.state
                ?
                  this.props.state.map(card => {
                    return (
                      <div>
                        <div>
                          <h6>Front: {card.front}</h6>
                          <h6>Back: {card.back}</h6>
                          <br/>
                        </div>
                      </div>
                    )
                  })
                :
                  <h1>IMPORT YOUR CARDS</h1>
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