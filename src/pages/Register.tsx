
import { Form, Formik } from 'formik';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import { FormData } from '../interfaces/FormData';
import { stepOneSchema, stepTwoSchema, stepThreeSchema } from '../schemas/schemas';
import { description } from '../components/Descriptions';
import useMultipleForm from '../hooks/useMultipleForm';
import { useNavigate } from 'react-router-dom';

const initialValues: Partial<FormData> = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    latitude: '',
    longitude: '',
    username: '',
    password: ''
  }

const Register = () => {
    const navigate  = useNavigate()
    const { steps, currentStep, step, isFirstStep, isLastStep, back, next } = useMultipleForm([
        <StepOne />,
        <StepTwo />,
        <StepThree />
      ])

    const addUser = async (values:Partial<FormData>) => {
      try{
        const response = await fetch('https://fakestoreapi.com/users',
          {
            method: 'POST',
            body: JSON.stringify({
              email: values.email,
              username: values.username,
              password: values.password,
              name: {
                firstname: values.firstName,
                lastname: values.lastName
              },
              address: {
                street: values.address,
                city: values.city,
                state: values.state,
                zipcode: values.zipCode,
                geolocation: {
                    lat: values.latitude,
                    long: values.longitude
                }
              },
              phone: values.phone
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        
        if(!response.ok)
          throw new Error(`Response status: ${response.status}`)

        console.log(`response ${response.status}`)
      } catch(error) {
        console.log(error)
      }
    }

    const handleSubmit = (step: number, values: Partial<FormData>) => {
      if (isLastStep) {
        console.log('Step: ', step)
        addUser(values)
        console.log(JSON.stringify(values))
        navigate('/login')
      } else {
        console.log('Step: ', step)
        next()
      }
    }
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='py-3 px-8 h-fit w-96 bg-white rounded-xl shadow-xl'>
        <Formik
          initialValues={
            initialValues
          }
          validationSchema={
            currentStep === 0 ? stepOneSchema : currentStep === 1 ? stepTwoSchema : stepThreeSchema
          }
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSubmit(currentStep, values)
              setSubmitting(false)
              console.log(values)
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form >
              <div
                className='flex flex-row justify-between mb-4'
              >
                <legend
                  className='block text-gray-800 text-2xl font-bold'
                >
                  {description(currentStep)}
                </legend>
                <div
                  className='block text-gray-800 text-2xl font-bold'
                >
                  {currentStep + 1} / {steps.length}
                </div>
              </div>

              {step}

              <div
                className='flex justify-between gap-10'
              >
                {!isFirstStep && (
                  <button 
                    type='button' 
                    onClick={back}
                    className='cursor-pointer py-2 px-4 mt-4 block bg-blue-500 text-white font-bold w-full text-center rounded-xl'
                  >
                    Back
                  </button>
                )}
                <button 
                  type='submit'
                  disabled={isSubmitting}
                  className='cursor-pointer py-2 px-4 mt-4 block bg-blue-500 text-white font-bold w-full text-center rounded-xl'
                >
                  {isLastStep ? 'Submit' : 'Next'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register