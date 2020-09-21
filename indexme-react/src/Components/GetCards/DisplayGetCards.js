import React, { Component} from 'react'
import { Header} from '../Shared/Header'
import * as Navigation from '../Shared/NavBars'
import GetCards from './Container/GetCards'

export default class DisplayGetCards extends Component {
  
  render() { 
    return (
      <div>
        <Navigation.GetCardsNavBar />
        <Header />
        <GetCards />
      </div>
    )
  }
}
