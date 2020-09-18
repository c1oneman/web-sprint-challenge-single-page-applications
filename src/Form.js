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
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])
  useEffect(() => {
    console.log(orders)
  }, [orders])
  const postOrder = newOrder => {
        setOrders(orders.concat(newOrder))
        setFormValues(initialFormValues)
  }
      const formSubmit = () => {
        const newOrder = {
            name: formValues.name.trim(),
            size: formValues.size.trim(),
            // toppings
            toppings: ['pepperoni', 'sausage', 'shrimp', 'bacon'].filter(toppings => formValues[toppings]),
            special: formValues.special.trim(),
          }
         
          postOrder(newOrder)
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