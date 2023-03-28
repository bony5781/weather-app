import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
import './Search.css'

function Search() {

    let navigate = useNavigate();
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/weather-app/result', { state: { input: input } })
    }

    return (
        <React.Fragment>
                <div className='container mt-5 text-center'>
                    <h1 className='mt-3 mb-5'>Weather App</h1>
                    <h3 className='mt-5 mb-1'>Enter your location</h3>
                    <form onSubmit={handleSubmit}>
                        <input  className='mt-3' type="text" onChange={e => setInput(e.target.value)} name="search" />
                        <br />
                        <button className='mt-2'>Submit</button>
                    </form>
                    <span className='mt-auto'>&#169;Made by Abhinav Bhowmik</span>
                </div>
        </React.Fragment>
    );
}

export default Search