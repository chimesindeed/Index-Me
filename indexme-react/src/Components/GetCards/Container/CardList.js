import '../../Styles/styles.css'
import React from 'react'
import {connect} from 'react-redux'
import {getCards} from '../../../State/actions/actions'

class CardList extends React.Component {
  constructor(){
    super()
    this.state = {
      currentCardFront: "",
      currentCardBack: ""
    }
  }  
  handleGetCards= () => { this.props.getCards() }
  handleClick = (e) => (
    this.setState({
      currentCardFront: e.target.getAttribute('data-front'),
      currentCardBack: e.target.getAttribute('data-back')
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
                              onClick={this.handleClick}>{card.front}
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