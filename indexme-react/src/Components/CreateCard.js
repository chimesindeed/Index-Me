import React from 'react'
const CreateCard = () =>
  <form>
    <h1>Create Card</h1>
    <div>
      <input type="string" name="front" placeholder="Front" />
      <label htmlFor="front">Front Face</label>
    </div>
    <div>
      <input type="text" name="definition" placeholder="Definition" />
      <label htmlFor="definition">Definition</label>
    </div>
    <input type="submit" value="Add" />
  </form>;
 
 export default CreateCard