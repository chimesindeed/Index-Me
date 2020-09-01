import React from 'react';
import Card from './Card'

class App extends React.Component {
  
  render(){
  return (
    <div className="page-container">
    

      <div className = "main-content">

        <div className = "main-content-column-container">
          <div className = "left-col">
            <Card />
          </div>

          <div className = "right-col">
          </div>

        </div>
      </div>

    </div>

  );
}
}
export default App;
