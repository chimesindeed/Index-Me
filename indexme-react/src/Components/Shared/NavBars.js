import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as styles from '../Styles/linkStyles'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'


export const WelcomeNavBar = () => (
  <Navbar style = { styles.nav }>      
    <NavLink to="/getcards" exact style={ styles.link }>Get Cards</NavLink>
    <NavLink to="/createcard" exact style={ styles.link }>Create Card</NavLink>   
  </Navbar>    
)
    
export const GetCardsNavBar = () => (
  <Navbar style = { styles.nav }>     
    <NavLink to="/" exact style={ styles.link }>Home</NavLink>
    <NavLink to="/createcard" exact style={ styles.link }>Create Card</NavLink>
  </Navbar>
)
        
export const CreateCardNavBar = () => (
  <Navbar style = { styles.nav }>
    <NavLink to="/" exact style={ styles.link }>Home</NavLink>
    <NavLink to="/getcards" exact style={ styles.link }>Get Cards</NavLink>
  </Navbar>
)
