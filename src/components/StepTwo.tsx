import { Field, ErrorMessage } from 'formik'

function StepTwo() {
  return (
    <>
      <div
        className='mb-4'
      >
        <label
          htmlFor='address' 
          className='block text-gray-800 font-bold' 
        >
          Street Address
        </label>
        < Field
          id='address'
          name='address'
          type='text'
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
        <ErrorMessage
          name="address"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div
        className='mb-4'
      >
        <label
          htmlFor='city'
          className='block text-gray-800 font-bold'
        >
          City
        </label>
        <Field
          id='city'
          name='city'
          type='text'
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
        <ErrorMessage
          name="city"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div
       className='mb-4'
      >
        <label
          htmlFor='state'
          className='block text-gray-800 font-bold'
        >
          State
        </label>
        <Field
          id='state'
          name='state'
          type='text'
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
        <ErrorMessage
          name="state"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div
       className='mb-4'
      >
        <label
          htmlFor='zipCode'
          className='block text-gray-800 font-bold'
        >
          Zip Code
        </label>
        <Field
          id='zipCode'
          name='zipCode'
          type='text'
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
        <ErrorMessage
          name="zipCode"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div
        className='flex flex-row justify-between gap-4 mb-4'
      >
        <div 
            className='flex flex-col'
        >
            <label
            htmlFor='latitude'
            className='block text-gray-800 font-bold'
            >
            Latitude
            </label>
            <Field
            id='latitude'
            name='latitude'
            type='text'
            className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
            />
            <ErrorMessage
            name="zipCode"
            component="div"
            className="text-red-500 text-sm mt-1"
            />
        </div>
        <div 
            className='flex flex-col'
        >
            <label
            htmlFor='longitude'
            className='block text-gray-800 font-bold'
            >
            Longitude
            </label>
            <Field
            id='longitude'
            name='longitude'
            type='text'
            className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
            />
            <ErrorMessage
            name="longitude"
            component="div"
            className="text-red-500 text-sm mt-1"
            />
        </div>
      </div>
    </>
  )
}

export default StepTwo