import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from './validation/formSchema'
import OrderForm from './OrderForm'
const initialFormValues = {
    // text
    name: '',
    // Drop Down //
    size: '',
    ///// CHECKBOXES /////
    pepperoni: false,
    sausage: false,
    shrimp: false,
    bacon: false,
    // extra text
    special: '',
  }
  const initialFormErrors = {
    // text
    name: '',
    // Drop Down //
    size: '',
    ///// CHECKBOXES /////
    pepperoni: '',
    sausage: '',
    shrimp: '',
    bacon: '',
    // extra text
    special: '',
  }
  const initialOrders = []
  const initialDisabled = true
export default function Form() {
    const [orders, setOrders] = useState(initialOrders) 
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled) 

    const validate = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(valid => {
            setFormErrors({
              ...formErrors,
              [name]: ""
            })
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            });
          });
      }
      const inputChange = (name, value) => {
        validate(name, value)
        setFormValues({
          ...formValues,
          [name]: value // NOT AN ARRAY
        })
      }
      
  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES

    /* Each time the form value state is updated, check to see if it is valid per our schema. 
    This will allow us to enable/disable the submit button.*/

    /* We pass the entire state into the entire schema, no need to use reach here. 
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])
      const formSubmit = () => {
       
      }
    

  return (
   
    <div>
     <div class = "mainSection">
        <h1>Customize your Pizza</h1>

        <OrderForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
    </div>
  )
}