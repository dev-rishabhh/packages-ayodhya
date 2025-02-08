import React, { useEffect, useState,lazy } from 'react'
import './WhetherCard.css'

// import { IoThunderstorm } from 'react-icons/io5'
// import { FiCloudDrizzle } from 'react-icons/fi'
// import { FaCloudRain } from 'react-icons/fa'
// import { FiCloudSnow } from 'react-icons/fi'
// import { MdFoggy } from 'react-icons/md'
// import { IoIosSunny } from 'react-icons/io'
// import { FaCloudSun } from 'react-icons/fa'

const IoThunderstorm = lazy(() => import('react-icons/io5').then((module)=>({default:module.IoThunderstorm})))
const FiCloudDrizzle = lazy(() => import('react-icons/fi').then((module)=>({default:module.FiCloudDrizzle})))
const FaCloudRain = lazy(() => import('react-icons/fa').then((module)=>({default:module.FaCloudRain})))
const FiCloudSnow = lazy(() => import('react-icons/fi').then((module)=>({default:module.FiCloudSnow})))
const MdFoggy = lazy(() => import('react-icons/md').then((module)=>({default:module.MdFoggy})))
const IoIosSunny= lazy(() => import('react-icons/io').then((module)=>({default:module.IoIosSunny})))
const FaCloudSun = lazy(() => import('react-icons/fa').then((module)=>({default:module.FaCloudSun})))




function WhetherCard() {
    const [data, setdata] = useState()
    const apiKey=import.meta.env.VITE_WEATHERMAP_API_KEY;
    const Whetehrdata = async () => {
        try {
            const [weatherResponse, airResponse] = await Promise.all([
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ayodhya,IN&APPID=${apiKey}`),
                fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=26.8&lon=82.2&APPID=${apiKey}`)
            ])
            if (weatherResponse && airResponse) {
                const [weatherdata, airdata] = await Promise.all([
                    weatherResponse.json(),
                    airResponse.json()
                ])
                setdata({ weatherdata, airdata })
            }
        } catch (err) {
            // console.log(err)
        }
    }
    useEffect(() => {
        Whetehrdata()
    }, []);
    const getIcon=()=>{
        const id=data.weatherdata.weather[0].id
        if(id>=200 && id<240) return <IoThunderstorm />
        if(id>=300 && id<330) return <FiCloudDrizzle />
        if(id>=500 && id<540) return <FaCloudRain />
        if(id>=500 && id<540) return <FaCloudRain />
        if(id>=600 && id<630) return <FiCloudSnow />
        if(id>=700 && id<790) return <MdFoggy />
        if(id==800) return <IoIosSunny />
        if(id>800 && id<805) return <FaCloudSun />
    }

    const getTempbg = () => {
        const temp = Math.floor(data.weatherdata.main.temp - 273.15);
        if (temp < 20) return {color:'lightblue',text:'Cold'}
         if (temp >= 20 && temp < 35) return {color:'lightgreen',text:'Moderate'}
      if ( temp > 35) return {color:'tomato',text:'Hot'}
        // console.log(temp);
        
    }
    const getAqi = () => {
        const aqi = data.airdata.list[0].components.pm10;
        if (aqi < 50) return { value: '0-50', text: 'Good', color: 'green' }
        if (aqi > 50 && aqi < 100) return { value: '50-100', text: 'Satisfactory', color: 'lightgreen' }
        if (aqi > 100 && aqi < 250) return { value: '100-150', text: 'Moderate', color: 'yellow' }
        if (aqi > 250 && aqi < 350) return { value: '150-200', text: 'Poor', color: 'orange' }
        if (aqi > 350 && aqi < 430) return { value: '200-250', text: 'Very Poor', color: 'tomato' }
        if (aqi > 430 && aqi < 700) return { value: '250-300', text: 'Severe', color: 'brown' }
    }

    return (
        <section className='WhetherCard-cont'>
            <h2>Today's Weather In Ayodhya</h2>
            <p className='weather-desc'>Get to know detailed information about today’s weather in Ayodhya, including temperature, wind conditions, and how the climate influences travel and outdoor activities in the city.</p>
            
            {!data &&<div className="skeleton">
          <div className="skeleton-image"></div>
          <div className="card-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-excerpt"></div>
          </div>
        </div>
        }
            {data && <article className='WhetherCard'>
                <div className="one">
                    <h3>Ayodhya</h3>
                    <div className='w-icon-cont'>
                        <div className="w-icon">{getIcon()}</div>
                        {data.weatherdata.weather[0].description}
                    </div>
                </div>
                <div className="grids">
                    <div className={`box br ${getTempbg().color} `}>
                        <h3 className='w-heading'>Temp</h3>
                        <div className='value'>
                            {Math.floor(data.weatherdata.main.temp - 273.15)}<span>&deg;C</span>
                            <p className="w-text">{getTempbg().text}</p>
                        </div>
                    </div>
                    <div className={`box br ${getAqi().color} `}>
                        <h3 className='w-heading'>AQI</h3>
                        <div className='value'>
                            {/* {getAqi().text} */}
                            {getAqi().value}
                            <p className='w-text'>{getAqi().text}</p>
                        </div>
                    </div>
                    <div className={`box  ${getTempbg().color} `}>
                        <h3 className='w-heading'>Feels Like </h3>
                        <div className="value">
                            {Math.floor(data.weatherdata.main.feels_like - 273.15)}<span>&deg;C</span>
                            <p className="w-text">{getTempbg().text}</p>
                        </div>
                    </div>
                </div>
                <div className="grids">
                    <div className='box'><h3 className='w-heading'>Wind</h3><div className="value white">{Math.round(data.weatherdata.wind.speed * 3.6)}km/h</div></div>
                    <div className='box'><h3 className='w-heading'>Humidity</h3><div className="value white">{data.weatherdata.main.humidity}%</div></div>
                    <div className='box'><h3 className='w-heading'>Pressure </h3><div className="value white">{data.weatherdata.main.pressure}hPa</div></div>
                </div>
            </article>
            }
        </section>
    )
}

export default WhetherCard