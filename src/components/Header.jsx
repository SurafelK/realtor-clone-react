import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom';


function Header() {

    const [pageState, setPageState] = useState("Signin")
    const location = useLocation()
    const navigate = useNavigate()

    const auth = getAuth();

    useEffect( () =>{
        onAuthStateChanged(auth, (user) =>
        {
            if(user){
                setPageState("Profile")
            }else{
                setPageState("Signin")
            }
        })
    } )

    function pathMatchRoute(route)
    {
        if(route === location.pathname)
        {
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40' >
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt='logo'
                        className='h-5 cursor-pointer' onClick={ () => navigate("/") }
                    />
                </div>

                <div>
                <ul className='flex space-x-10 '>
                    <li className={`py-3 cursor-pointer text-sm font-semibold text-gray-400  border-b-[3px] cursor-pointer ${pathMatchRoute("/") && "text-black border-b-red-500"} `} onClick={ () => navigate("/") } > Home </li>
                    <li className={`py-3 cursor-pointer text-sm font-semibold text-gray-400  border-b-[3px] cursor-pointer ${pathMatchRoute("/offers") && "text-black border-b-red-500"} `} onClick={ () => navigate("/offers") }  > Offers </li>  
                    <li className={`py-3 cursor-pointer text-sm font-semibold text-gray-400  border-b-[3px] cursor-pointer ${(pathMatchRoute("/signin") || pathMatchRoute("/profile"))   && "text-black border-b-red-500"} `} onClick={ () => navigate("/profile") } > {pageState} </li>
                </ul>
           </div>
          
        </header>
    </div>
  )
}

export default Header
