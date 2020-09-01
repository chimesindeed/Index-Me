import React from 'react';
import NavBar from './NavBar'
import CardList from './CardList'


class App extends React.Component {
  constructor(props) { super(props) }

  render() { 
    return ( <div>
               <NavBar /> 
               <CardList />
             </div>
            )
  }
}

export default App;
