import '../../Styles/styles.css'
import React from 'react'
import {connect} from 'react-redux'
import {getCards} from '../../../State/actions/actions'
import ReactCardFlip from 'react-card-flip'

class CardList extends React.Component {
  constructor(){
    super()
    this.toggled = "none"
    this.state = {
      currentCardFront: "",
      currentCardBack: "",
      isFlipped: false,
      clicked: false
    }
  }  
  handleGetCards= () => (
    this.props.getCards(),
    this.setState({clicked: false, currentCardFront: "", currentCardBack: ""}))
  
  handleCardClicked = (e) => (
    this.setState({
      currentCardFront: e.target.getAttribute('data-front'),
      currentCardBack: e.target.getAttribute('data-back'),
      clicked: true
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
            <h5>{this.state.currentCardFront}</h5>
            <h5>{this.state.currentCardBack}</h5>
            {
              this.state.clicked === false
                
                ? 
                  (
                    <button style = {{display: 'none'}}>Flip</button>
                  )
                :
                  (
                    <button style = {{display: 'block'}}>Flip</button>
                  )
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