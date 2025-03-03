import React, { use, useEffect } from 'react'
import './Whether.css'
import searchIcon from '../assets/search.svg'
import cloud from '../assets/cloud.svg'
import clear from '../assets/sun-out.png'
import rain from '../assets/rain.svg'
import humidity from '../assets/humidity.png'
import cloudy from '../assets/cloudy.png'
import wind from '../assets/storm.png'

const Whether = () => {
    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }
        catch(error) {
            console.log(error)
        }
    } 
      useEffect(() => {
        search('London')
      }, [])

    return (
    <div>
       <div className='whether'>
        <div className="search-bar">
          <input type="text" placeholder='Search' />
           <img src={searchIcon} alt="search-box" />
        </div>
        <img src={cloud} alt="" className='whether-icon' />
        <p className='whether-temp'>16°C</p>
        <p className='whether-location'>London</p>
        <div className="whether-data">
            <div className="col">
                <img src={humidity} alt="" />
                <p>91%- </p>
                <span>Humidity</span>
            </div>
            <div className="col">
                <img src={wind} alt="" />
                <p>3.6 Km/h -</p>
                <span>Wind-Speed</span>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Whether