import React, { useState } from 'react'

export default function CreateListing() {

    
    const [formData, setFormData] = useState({
        type: "sale",
        name: "",
        bedroom: 1,
        bathroom: 1,
        parking: true,
        furnished: true,
        address: "",
        description:"",
        offer:true,
        regularPrice: "",
        discountedPrice: ""
    })

    const {type, name, discountedPrice, description, bedroom, bathroom, regularPrice, offer, parking, furnished, address} = formData;

    function onChange(e){
        setFormData( (prevState) =>({
            ...prevState,
            [e.target.id] : e.target.value 
        }) )

        console.log(formData);
    }
 

  return (
   <main className='max-w-md px-2 mx-auto'>
    <h1 className='text-3xl text-center mt-6 font-bold'> Create a Listing </h1>

    <form>
        <p className='text-lg mt-6 font-semibold' >Sell / Rent</p>
        <div className='flex space-x-6'>
            <button 
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === "rent" ? "bg-white" : "bg-slate-600 text-white" } ` }
             type='button' id='type' value='sale' onClick={onChange} > Sell </button>

            <button 
                className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === "sale" ? "bg-white" : "bg-slate-600 text-white" } ` }
                type='button' id='type' value='rent' onClick={onChange} > Rent 
            </button>
        </div>

        <p className='text-lg mt-6 font-semibold'> Name </p>

        <input 
            type="text"
            id='name' 
            value={name} 
            onChange={onChange} 
            placeholder='Name' 
            maxLength="32" 
            min="10"  
            required
            className='w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out active:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 '
        />

        <div className='flex space-x-6 mb-6 '>
            <div className='flex flex-col'>
                <p className='text-lg mt-6 font-semibold' >Beds</p>
                <input
                    type="number" 
                    value={bedroom} 
                    id="bedrooms"  
                    onChange={onChange} 
                    min="1" 
                    max="50" 
                    required 
                    className='px-4 w-full py-2 text-xl text-gray-700 bg-white border border-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                />

            </div>

            <div className='flex flex-col'>
                <p className='text-lg mt-6 font-semibold' >Baths</p>
                <input
                    type="number" 
                    value={bathroom} 
                    id="bathroom"  
                    onChange={onChange} 
                    min="1" 
                    max="50" 
                    required 
                    className='px-4 w-full py-2 text-xl text-gray-700 bg-white border border-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                />

            </div>

        </div>

        <p className='text-lg mt-6 font-semibold' > Parking Spot </p>
        <div className='flex space-x-6'>
            <button 
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!parking ? "bg-white" : "bg-slate-600 text-white" } ` }
             type='button' id='parking' value={true} onClick={onChange} > Yes </button>

            <button 
                className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${parking  ? "bg-white" : "bg-slate-600 text-white" } ` }
                type='button' id='type' value={false} onClick={onChange} > No 
            </button>
        </div>

        <p className='text-lg mt-6 font-semibold' >Furnished</p>


        <div className='flex space-x-6'>
            <button 
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!furnished ? "bg-white" : "bg-slate-600 text-white" } ` }
             type='button' id='type' value={true} onClick={onChange} > Yes </button>

            <button 
                className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${furnished ? "bg-white" : "bg-slate-600 text-white" } ` }
                type='button' id='type' value={false} onClick={onChange} > No 
            </button>
        </div>


        <p className='text-lg mt-6 font-semibold'> Address </p>

        <input 
            type="text"
            id='address' 
            value={address} 
            onChange={onChange} 
            placeholder='Address' 
            maxLength="500" 
            min="10"  
            required
            className='w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out active:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 '
        />


        <p className='text-lg mt-6 font-semibold'> Description </p>

        <input 
            type="text"
            id='description' 
            value={description} 
            onChange={onChange} 
            placeholder='Description' 
            maxLength="500" 
            min="10"  
            required
            className='w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out active:text-gray-700 focus:bg-white focus:border-slate-600 mb-6 '
        />
        <p className='text-lg mt-6 font-semibold'> Offer </p>
        <div className='flex space-x-6 mb-6 '>
            <button 
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!offer ? "bg-white" : "bg-slate-600 text-white" } ` }
             type='button' id='offer' value={true} onClick={onChange} > Yes </button>

            <button 
                className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${offer ? "bg-white" : "bg-slate-600 text-white" } ` }
                type='button' id='offer' value={false} onClick={onChange} > No 
            </button>
        </div>


        <div className='flex flex-col w-full mb-6'>
            <p className='text-lg mt-6 font-semibold' >Regular Price</p>
           <div className='flex w-full justify-center items-center space-x-6 '>
                <input
                    type="number" 
                    value={regularPrice} 
                    id="regularPrice"  
                    onChange={onChange} 
                    min="50" 
                    max="400000000" 
                    required 
                    className='px-4 w-full py-2 text-xl text-gray-700 bg-white border border-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                />
            

                { type === "rent" && (
                    <div className='ml-6 justify-center items-center align-middle' >
                        <p className='text-md w-full whitespace-nowrap' > $ / Month
                        </p>
                    </div>
                ) }

            </div>
        </div>

        { offer === true && (
            <div className='flex flex-col w-full mb-6'>
            <p className='text-lg mt-6 font-semibold' >Discounted Price</p>
           <div className='flex w-full justify-center items-center space-x-6 '>
                <input
                    type="number" 
                    value={discountedPrice} 
                    id="discountedPrice"  
                    onChange={onChange} 
                    min="50" 
                    max="400000000" 
                    required = {offer}
                    className='px-4 w-full py-2 text-xl text-gray-700 bg-white border border-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                /> 

                { type === "rent" && (
                    <div className='ml-6 justify-center items-center align-middle' >
                    <p className='text-md w-full whitespace-nowrap' >                                $ / Month
                    </p>
                </div>
                ) }

            </div>
        </div>
        ) }

            <div className='flex flex-col w-full mb-6'>
                <p className='text-lg mt-6 font-semibold' >Images</p>
                <p className='text-sm font-light text-gray-600' >The first image will be the cover (max 6) </p>
                <div className='flex w-full justify-center items-center space-x-6 '>
                    <input
                        type="file" 
                        id="images"  
                        onChange={onChange} 
                        accept=".jpg,.png,.jpeg"
                        multiple
                        required
                        className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600 '
                    /> 

                </div>
            </div>

            <button type='submit' className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '> Create Listing </button>
        

    </form>


   </main>
  )
}

// setChangeDetail( (prevState) => !prevState )
