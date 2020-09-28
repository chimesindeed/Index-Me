import '../../Styles/styles.css'
import React from 'react'
import {connect} from 'react-redux'
import {getCards} from '../../../State/actions/actions'
import {deleteCard} from '../../../Adapter/adapter'

import ReactCardFlip from 'react-card-flip'

class CardList extends React.Component {
  constructor(){
    super()
    this.state = {
      cardSelected: false,
      currentCardFront: "",
      currentCardBack: "",
      currentCardId: 0, 
      isFlipped: false
    }
  }  
  handleGetCards= () => (
    this.props.getCards(),
    this.setState({cardSelected: false, currentCardFront: "", currentCardBack: ""}))
  
  handleCardClicked = (e) => (
    this.setState({
      currentCardFront: e.target.getAttribute('data-front'),
      currentCardBack: e.target.getAttribute('data-back'),
      currentCardId: e.target.getAttribute('data-id'),
      cardSelected: true
    })
  )

  handleCardFlipped = (e) => (
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  )

  handleDeleteCard = (e) => (
    deleteCard(this.state.currentCardId)
    .then(res => {
      this.props.getCards()
      this.setState({cardSelected: false})
    })
    
  )
  render() {
    return (
      <div>
        <div class="column-container mt-0">
      
          <div class="left-col mr-auto">
            <button onClick = {this.handleGetCards}>Get Cards</button>
            <div>
            <br/>
              {      
                this.props.state
                  ?
                    (
                      this.props.state.map(card => {
                        return (
                          <div key = {card.id}>
                            <button
                              data-id = {card.id}
                              data-front ={card.front}
                              data-back = {card.back }
                              onClick={this.handleCardClicked}>{card.front}
                            </button>
                            <br/> 
                          </div>
                        )
                      })
                    )
                  :
                    <h1>IMPORT YOUR CARDS</h1>
              } 
            </div>
          </div>

          <div class="right-col mr-auto">
            {
              this.state.cardSelected === false
                ?
                  (
                    <div></div>
                  )
                :
                  <div>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='vertical'>
                      <div>
                        <h2>WORD: {this.state.currentCardFront}</h2>
                        <button onClick={this.handleCardFlipped}>Click to flip</button>
                      </div>

                      <div>
                        <h2>DEFINITION: {this.state.currentCardBack}</h2>
                        <button onClick={this.handleCardFlipped}>Click to flip</button>
                      </div>
                    </ReactCardFlip>
                    <button onClick={this.handleDeleteCard}>Delete card</button>
                  </div>
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