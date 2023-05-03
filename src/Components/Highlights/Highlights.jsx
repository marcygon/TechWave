import React from 'react'
import './Highlights.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import techwaveServices from '../../Services/TechWaveService'

function Highlights() {
    const[highlights, setHighlights] = useState([])
    useEffect(()=>{
        techwaveServices.findHighlights()
        .then((data)=>{setHighlights(data)})
    },[])
    return (
        <section className='highlightsBox'>
            {highlights.map((item)=>{
                return(
                    <div className='highlightCard'>
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default Highlights
