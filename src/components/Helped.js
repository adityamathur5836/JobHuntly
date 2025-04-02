import React from 'react'
import helped from '../assets/helped.png'
import './Helped.css'

export default function Helped() {
    return (
        <div className='helped'>
            <h2>Companies we helped Grow</h2>
            <img src={helped}/>
        </div>
    )
}