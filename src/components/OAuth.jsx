import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import {db} from '../firebase'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function OAuth() {

  const navigate = useNavigate()
    const onGoogleClick = async () =>
    {
        try {
          const auth = getAuth()

          const provider = new GoogleAuthProvider()

          const result = await signInWithPopup(auth, provider)
          const user = result.user

          // check for the user
          const docRef = doc( db, "users", user.uid )

          const docSnap = await getDoc(docRef)

          if(!docSnap.exists()){
            await setDoc(docRef, {
              name: user.displayName,
              email: user.email,
              timestamp: serverTimestamp()
            })
          }

          navigate('/')
          
        } catch (error) {

          toast.error("Couldn't authorize with google")
          console.log(error);
        }
    }
  return (
    <div>
      <button type='button' className='bg-red-600 hover:bg-red-500 w-full p-2 text-white font-semibold text-2xl flex items-center justify-center'
       onClick={onGoogleClick}
       >  <FcGoogle className='mx-2 bg-white rounded-full' /> continue with google </button>
    </div>
  )
}

export default OAuth
