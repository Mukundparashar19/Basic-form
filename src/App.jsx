import { useState } from 'react'

function App() {
  const initialValues = {username:'', email:'', password:''}
  const [formValues, setFormValues] = useState(initialValues)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value    })
    console.log(formValues);
      }

      const handleSubmit = (e) => {
      e.preventDefault();
      }
  return (
    <>
  <div className='bg-gray-600 py-32'>
    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
  <form class="max-w-sm mx-auto mt-32" onSubmit={handleSubmit}>
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Your Username</label>
    <input type="text" name='username' id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
     value={formValues.username} 
     onChange={handleChange}
     required />
  </div>

  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" name='email' id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
     value={formValues.email} 
     onChange={handleChange}
     placeholder="name@flowbite.com"
     required />
  </div>

  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
    <input type="password" name='password' id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
    value={formValues.password}
    onChange={handleChange}
    required />
  </div>

  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>

</div>
    </>
  )
}

export default App
