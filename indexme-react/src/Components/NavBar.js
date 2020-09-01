import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropDown from 'react-bootstrap/Dropdown'
import CSVReader1 from './CSVReader1'

class NavBar extends React.Component {
  render(){
    return ( 
        <nav className="bg-dark navbar navbar-dark navbar-expand-lg" style = {{backgroundColor: 'coral'}}>  
          <div className="collapse navbar-collapse" id="navbarColor01" style = {{backgroundColor: 'coral'}}>
            
            <ul className="mr-auto navbar-nav">
              <a className="nav-link" style = {{backgroundColor: 'maroon', color: 'white'}} >Index-Me<span className="sr-only">(current)</span></a>
              <CSVReader1 />            
            </ul>
          </div>
        </nav>
      
  
    )
  }
}

export default NavBar;