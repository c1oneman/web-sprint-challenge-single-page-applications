import React from 'react'
import './App.css'
export default function OrderForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Pick Below</h2>


        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.special}</div>
          </div>
      </div>

      <div className='form-group inputs'>
        <h4>Pizza information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Your Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>


        <label>Size
          <select
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select a Size -</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        
    

      <div className='form-group checkboxes'>
        <h4>Toppings</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <label>Pepperoni
          <input
            type="checkbox"
            name='pepperoni'
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.sausage}
            onChange={onChange}
          />
        </label>

        <label>Shrimp
          <input
            type="checkbox"
            name="shrimp"
            checked={values.shrimp}
            onChange={onChange}
          />
        </label>
        <label>Bacon
          <input
            type="checkbox"
            name="bacon"
            checked={values.bacon}
            onChange={onChange}
          />
        </label>
      </div>
      
      <label>Special Request
          <input
            value={values.special}
            onChange={onChange}
            name='special'
            type='text'
          />
        </label>
      </div>
      <button id = "submit" disabled={disabled}>Order</button>

    </form>
  )
}
