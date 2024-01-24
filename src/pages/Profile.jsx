import { getAuth, updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase';

function Profile() {

  const auth = getAuth(); 

  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false)
  

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


  function onChange(e)
  {
    setFormData( (prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }) )
  }

 async function onSubmit()
  {
    try {

      if(auth.currentUser.displayName !== name ){
        // Update the display name in firebase auth

        const upfirebase =  await updateProfile(auth.currentUser, {
          displayName: name
        });
        

        // Update name in the firestore
        const docRef = doc(db, "users", auth.currentUser.uid)

        await updateDoc(docRef, {
          name
        });

      }

      toast.success("Profile updated Succesfully")
      
    } catch (error) {

      toast.error("couldn't update the profile details")
      
    }
  }

  return (
   <>
   <section className='max-w-6xl mx-auto flex flex-col justify-center items-center align-middle' >
    <h1 className='text-center text-3xl mt-6 font-bold' >My Profile</h1>
    <div className='w-full md:w-[50%] mt-6 px-3 justify-center align-middle items-center' >
      <form className='' >
      <input type='text'
       value={name} 
       id='name' 
      disabled={!changeDetail} 
      onChange={onChange}
      className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200" } `}/>
      <input type='email' value={email} id='email' disabled={!changeDetail} className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'/>

      <div className='flex  justify-between whitespace-nowrap ' >
        <p className=''>Do you want to change your name? <span onClick = { () => {
          changeDetail && onSubmit();
           setChangeDetail( (prevState) => !prevState )
        } } 
        
        className='text-red-500 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'> {changeDetail ? "Apply Change" : "Edit"} </span> </p>
        <p className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer ' onClick={onLogout} >Sign out</p>
      </div>

      </form>

    </div>
   </section>
   </>
  )
}

export default Profile
