import React, { useEffect, useState } from 'react'
import { useLocation , useNavigate } from 'react-router-dom';
import axios from 'axios';
import './result.css'

function Result() {

    let navigate = useNavigate();
    const location = useLocation()
    const [data, setData] = useState([]);
    const [weather, setWeather] = useState("container");
    
    const handleAgain = (e) => {
        e.preventDefault()
        navigate('/weather-app',{})
    }
    useEffect(() => {
        const getApiData = async () => {
            try {
                const res = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.state.input}?unitGroup=metric&key=FNC38A9W2AHUM7ZFUB38B3GZ5&contentType=json`)
                setWeather(res.data.currentConditions)
                setData(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getApiData()
    }, [location])

    return (
        <div className='container-fluid'>
            <div className={`${weather.temp >= 30 ? (weather.temp >= 40 ? 'container-extreme-hot' : 'container-hot') : (weather.temp > 18 && weather.temp < 30 ? 'container-good' : 'container-cold')}`}>
                <h1 className='mt-2 mb-1 text-center'>Weather App</h1>
                <h3 className='mt-2 mb-2 text-center'>Your location is : {data.resolvedAddress} </h3>
                <h2 className='text-center mt-1'><u>Climate Details</u></h2>
                <h5 className='text-center mt-1 '>Current temperature : {weather.temp}</h5>
                <h5 className='text-center'>Description : {data.description}</h5>
                <h5 className='text-center'>Current Condition : {weather.conditions}</h5>
                <h5 className='text-center'>Humidity : {weather.humidity}</h5>
                <h5 className='text-center'>Dew : {weather.dew}</h5>
                <h5 className='text-center'>Visibility : {weather.visibility}</h5>
                <h5 className='text-center'>Solar Radiation : {weather.solarradiation}</h5>
                <button onClick={handleAgain}>Try another location</button>
                <span className='mt-auto text-center'>&#169;Made by Abhinav Bhowmik</span>
            </div>
        </div>
    )
}

export default Result