import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const stepOneSchema = Yup.object({
    firstName: Yup.string()
        .required("Please enter your first name."),
    lastName: Yup.string()
        .required('Please enter your last name.'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Please enter your phone number.'),
    email: Yup.string()
        .email('Invalid email format.')
        .required('Please enter your email.')
})

const stepTwoSchema = Yup.object({
    address: Yup.string().
        required("Please enter your street address."),
    city: Yup.string()
        .required('Please enter your city.'),
    state: Yup.string()
        .required('Please enter your state.'),
    zipCode: Yup.string()
        .matches(/^[0-9]{5}$/, 'Invalid Zip Code format.')
        .required('Please enter your zip code.'),
    latitude: Yup.string()
        .required('Please enter your latitude address.'),
    longitude: Yup.string()
        .required('Please enter your longitude address.')
    
})

const stepThreeSchema = Yup.object({
    username: Yup.string()
        .required('Please enter your username.'),
    password: Yup.string()
        .min(6, 'Password must be at least 8 characters')
        .required('Please enter your password.')
})

const addSchema = Yup.object({
    name: Yup.string()
        .required('Please enter the name.'),
    description: Yup.string()
        .required('Please enter the description.')
})

const updateSchema = Yup.object({
    name: Yup.string()
        .required('Please enter new name.'),
    description: Yup.string()
        .required('Please enter new description.')
})

const loginSchema = Yup.object({
    username: Yup.string()
        .required('Please enter your username.'),
    password: Yup.string()
        .min(6, 'Password must be at least 8 characters')
        .required('Please enter your password.')
})

export {
    stepOneSchema,
    stepTwoSchema,
    stepThreeSchema,
    addSchema,
    updateSchema,
    loginSchema
}