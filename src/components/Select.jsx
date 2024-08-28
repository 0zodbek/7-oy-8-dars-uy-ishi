import React, { useEffect, useState } from "react";
import countriesData from "../assets/country-currency.json"
function Select({ countries }) {
  const [openOptions, setOpenOptions] = useState(false);
  const [selected, setSelected] = useState({});
  useEffect(() => {
    setSelected(countries[0]);
  }, []);
  function handleSelectCountry(country){
 setSelected(country)
 setOpenOptions(false)
}
  console.log("openoptions",openOptions);
  return (
    <div>
    <p className='mt-[-36px] mb-2 text-lg font-bold'>To</p>
    <div  
      className="border-1 w-80 flex p-3 h-14 border border-slate-300 rounded justify-between cursor-pointer selector" onClick={(e)=>{
        console.log(e.target);
    }}
    >
      { !openOptions && (
        <>
          <div onClick={() => setOpenOptions(!openOptions)} className=" flex items-center gap-5">
          <img src={selected.flag} alt={`${selected.name} flag`} className='w-8' />
          <span>
            {selected.currencies && (
              `${Object.keys(selected.currencies)[0]} - ${Object.values(selected.currencies)[0].name}`
            )}
          </span>
          </div>
        </>
      )}
      { openOptions && <input className="outline-none w-60 bg-transparent h-6 z-1000 focus-within:" placeholder="Type to search"></input>}
      <span>
        {!openOptions ? (
          <i onClick={() => setOpenOptions(!openOptions)} className="fa-solid fa-chevron-down"></i>
        ) : (
          <i onClick={() => setOpenOptions(false)} className="fa-solid fa-xmark"></i>
        )}
      </span>
    </div>

    {openOptions && (
      <ul className="options shadow-lg px-3 w-72 mt-2 bg-white overflow-y-scroll h-80 rounded">
        {countriesData.map((country, index) => (
          <li 
            key={index} 
            className="flex gap-5 mt-2 items-center cursor-pointer hover:bg-slate-300 text-sm"
            onClick={() => handleSelectCountry(country)}
          >
            <img src={country.flag} alt={`${country.name} flag`} className='w-8 h-6' />
            <span>
              {country.currencies && (
                `${Object.keys(country.currencies)[0]} - ${Object.values(country.currencies)[0].name}`
              )}
            </span>
          </li>
        ))}
      </ul>
    )}
  </div>

  );
}

export default Select;
