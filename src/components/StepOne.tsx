import { Field, ErrorMessage } from 'formik'

function StepOne() {
  return (
    <>
      <div className='flex flex-row justify-between gap-4 mb-4'>
      <div 
            className='flex flex-col'
        >
            <label
            htmlFor='firstName'
            className='block text-gray-800 font-bold'
            >
            First Name
            </label>
            <Field
            id='firstName'
            name='firstName'
            type='text'
            className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
            />
            <ErrorMessage
            name="firstName"
            component="div"
            className="text-red-500 text-sm mt-1"
            />
        </div>
        <div 
            className='flex flex-col'
        >
            <label
            htmlFor='lastName'
            className='block text-gray-800 font-bold'
            >
            Last Name
            </label>
            <Field
            id='lastName'
            name='lastName'
            type='text'
            className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
            />
            <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500 text-sm mt-1"
            />
        </div>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='phone'
          className='block text-gray-800 font-bold'
        >
          Phone Number
        </label>
        <Field
          id='phone'
          name='phone'
          type='phone'
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
        <ErrorMessage
          name="phone"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-gray-800 font-bold'
        >
          Email
        </label>
        <Field
          id='email'
          name='email'
          type='email'
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  )
}

export default StepOne