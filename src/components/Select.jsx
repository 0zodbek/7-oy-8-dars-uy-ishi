import React, { useState } from 'react'

function Select({countries}) {
    const [openOptions, setOpenOptions] = useState(fatse)
  return (
    <div>
        <label htmlFor="select">To</label>
        <div className="border">
            <span className="flag">

            </span>
            <input type="text"  id="select" placeholder='Type to search' />
            <span><i class="fa-solid fa-angle-down"></i></span>
        </div>
        <div className="options shadow-lg px-3 w-72 overflow-scroll h-80 overflow-x-hidden rounded">
            { countries && countries.map(function(country,index){
                return <li key={index} className='flex gap-5 mt-2 items-center cursor-pointer hover:bg-slate-300 text-sm'>
                    <img src={country.flag} alt={`${country.name}flag`} width={20}/>
                    { country.currencies && <span>{Object.keys(country?.currencies)} - {Object.values(country?.currencies)[0].name}</span> }
                </li>
            })}
        </div>
    </div>
  )
}

export default Select