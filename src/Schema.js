import * as yup from 'yup';


const schema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('name is required!')
    .min(2, 'name must be at least 2 characters'),

    size: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large', 'XXX'], 'pizza size is required'),

    sausage: yup.boolean(),
    
    pineapple: yup.boolean(),

    jalapeno: yup.boolean(),
    
    beef: yup.boolean(),

    special: yup
    .string()
    .trim()
})

export default schema;