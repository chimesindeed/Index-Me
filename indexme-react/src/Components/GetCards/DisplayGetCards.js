import React, { Component} from 'react'
import { Header} from '../Shared/Header'
import * as Navigation from '../Shared/NavBars'
import CardList from './Container/CardList'

export default class DisplayGetCards extends Component {
  
  render() { 
    return (
      <div>
        <Navigation.GetCardsNavBar />
        <Header />
        <CardList />
      </div>
    )
  }
}
