import React, { Component} from 'react'
import { Header } from '../Shared/Header'
import * as Navigation from '../Shared/NavBars'
import { Welcome } from './Welcome'

export default class Display_Welcome extends Component {

  render() { 
    return (      
      <div>
        <Navigation.WelcomeNavBar />
        <Header />
        <Welcome />
      </div> 
    )
  }
}
