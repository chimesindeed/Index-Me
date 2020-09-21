import React from 'react'
import DisplayCreateCardForm from '../Components/CreateCard/DisplayCreateCardForm'
import DisplayGetCards from '../Components/GetCards/DisplayGetCards'
import DisplayWelcome from '../Components/Welcome/DisplayWelcome'

export const WelcomeRoute = () => ( <div> <DisplayWelcome /> </div> )

export const GetCardsRoute = () => ( <div> <DisplayGetCards/> </div> )

export const CreateCardRoute =() => ( <div> <DisplayCreateCardForm /> </div> )



