import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .min(3, 'Name must be 3 chars or longer'),
  size: yup.string()
    .oneOf(['Small', 'Medium', 'Large'], 'Role is required'),
 
  // we are done with checkboxes
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  shrimp: yup.boolean(),
  bacon: yup.boolean(),
  
  special: yup.string()
    .required('Please fill out the special request')
})
