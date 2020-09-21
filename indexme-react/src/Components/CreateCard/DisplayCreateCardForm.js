import React, { Component} from 'react'
import { CreateCardForm, submit } from './Container/CreateCardForm'
import * as Navigation from '../Shared/NavBars'
import { Header } from '../Shared/Header';

export default class DisplayCreateCardForm extends Component {
  
  
  render() { 
    return (      
      <div>
        <Navigation.CreateCardNavBar />
        <Header />
        <CreateCardForm onSubmit = { submit }/>
      </div>

    )
  }
}
