import React, { useEffect, useState } from 'react'

function Select({countries}) {
    const [openOptions, setOpenOptions] = useState(false)
    const [selected, setSelected] = useState({})
    useEffect(()=>{
    setSelected(countries[0])
    },[])
  return (
    <div>
        <label htmlFor="select">To</label>
        <div onClick={()=>{setOpenOptions(true)}}  className="border w-72 flex  p-3 rounded justify-between cursor-pointer">
        <img src={selected.flag} alt={`${selected.name}flag`} width={20}/>
                    { selected.currencies && <span>{Object.keys(selected.currencies)} - {Object.values(selected.currencies)[0].name}</span> }
            {/* <input type="text"  id="select" placeholder='Type to search' /> */}
            { openOptions && <span><i class="fa-solid fa-chevron-down"></i></span> }
        </div>
        <div >
            { openOptions && <ul className="options shadow-lg px-3 w-72 overflow-scroll h-80 overflow-x-hidden rounded">
                { countries && countries.map(function(country,index){
                return <li key={index} className='flex gap-5 mt-2 items-center cursor-pointer hover:bg-slate-300 text-sm'>
                    <img src={country.flag} alt={`${country.name}flag`} width={20}/>
                    { country.currencies && <span>{Object.keys(country?.currencies)} - {Object.values(country?.currencies)[0].name}</span> }
                </li>
            })}
                </ul>}
        </div>
    </div>
  )
}

export default Select