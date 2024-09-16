import { useState, useEffect } from 'react'

function App() {
  const initialValues = {username:'', email:'', password:''}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
      }

      const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors( validate(formValues));
      setIsSubmit(true)
      }
    
useEffect(() => {
  console.log(formErrors)
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues)
  }
},[formErrors])


      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!values.username){
          errors.username = 'username is req'
        }
        if(!values.email){
          errors.email = 'email is req'
        } else if(!regex.test(values.email)) {
          errors.email = 'this is not valid email format';
        }
        if(!values.password){
          errors.password = 'pass is req'
        } else if(values.password.length < 4) {
          errors.password = 'password must be of 4 characters'
        } else if(values.password.length > 10){
          errors.password = 'password cant be of more then 10 char'
        }
       return errors;

      }


  return (
    <>
  <div className='bg-gray-600 py-32'>
    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
  <form class="max-w-sm mx-auto mt-32" onSubmit={handleSubmit}>
  <div class="mb-5">
    <label class="block mb-2 text-sm font-medium text-gray-900">Your Username</label>
    <input type="text" name='username' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
     value={formValues.username} 
     onChange={handleChange}
      />
            <p className='text-red-500'>{formErrors.username}</p>

  </div>

  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" name='email' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
     value={formValues.email} 
     onChange={handleChange}
      />
      <p className='text-red-500'>{formErrors.email}</p>
  </div>

  <div class="mb-5">
    <label class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
    <input type="password" name='password'  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
    value={formValues.password}
    onChange={handleChange}
     />
           <p className='text-red-500'>{formErrors.password}</p>

  </div>

  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>

</div>
    </>
  )
}

export default App
