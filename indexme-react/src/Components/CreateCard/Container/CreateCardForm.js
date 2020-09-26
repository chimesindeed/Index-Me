import '../../Styles/styles.css'
import React from 'react'
import {createCard} from '../../../State/actions/actions' 
import { Field, reduxForm } from 'redux-form'

export const CreateCardFormFunction = ({handleSubmit}) => {
    return (
    <div>
      <div class="column-container mt-0">
        <div class="left-col mr-auto">
          <form onSubmit={handleSubmit(submit)}>
            <h1>Create Card</h1>
            <p>
              <Field  name="front"
                      component="input"
                      type="string"
                      placeholder="Front"
              />
              <label  htmlFor="front">Front Of Card</label>
            </p>
            <p>
              <Field  name="back"
                      component="input"
                      type="text"
                      placeholder="Back"
              />
              <label htmlFor="definition">Back of Card</label>
            </p>
            <button type="submit">Add Card</button>
          </form> 
        </div>
          <div class="right-col mr-auto">
            
          </div>
      </div>
    </div>

    );
  }
  
  export const CreateCardForm = reduxForm({
    form: 'createCard'
  })(CreateCardFormFunction)

  export const submit = (values) => {
    return (createCard(values))
    
  }