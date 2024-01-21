import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Profile() {

  const auth = getAuth(); 

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });

  const {name, email} = formData;

  const onLogout = () =>
  {
    auth.signOut();
     navigate('/')
  }

  return (
   <>
   <section className='max-w-6xl mx-auto flex flex-col justify-center items-center align-middle' >
    <h1 className='text-center text-3xl mt-6 font-bold' >My Profile</h1>
    <div className='w-full md:w-[50%] mt-6 px-3 justify-center align-middle items-center' >
      <form className=''>
      <input type='text' value={name} id='name'  disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'/>
      <input type='email' value={email} id='email' disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'/>

      <div className='flex  justify-between whitespace-nowrap ' >
        <p className=''>Do you want to change your name? <span className='text-red-500 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'>Edit</span> </p>
        <p className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer ' onClick={onLogout} >Sign out</p>
      </div>

      </form>

    </div>
   </section>
   </>
  )
}

export default Profile
